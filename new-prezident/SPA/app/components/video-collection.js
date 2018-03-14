import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    videoNavigator: Ember.inject.service(),
    videoHistory: Ember.inject.service(),
    playlist: null,
    videoRangeIndex: 0,
    currentVideoRangeIndex: -1,
	didInsertElement(){
        this.setPlaylist(this.getNextPlaylist());
        // Ember.run.scheduleOnce('afterRender', this.afterRender.bind(this));
	},
    // afterRender(){
    //     this.updateCarouselArrows();
    //     console.log('update arrows');
    // },
    updateCarouselArrows(){
        let videoRangeIndex = this.get('videoRangeIndex');
        let videoRangesCount = this.get('playlist.videoRanges.length');
        let showPrev = videoRangeIndex > 0;
        let showNext = videoRangeIndex < (videoRangesCount-1);

        let $carousel = $('.carousel');
        let $prevButton = $carousel.children('.carousel-control-prev');
        let $nextButton = $carousel.children('.carousel-control-next');

        if(showPrev){
            $prevButton.show();
        }
        else{
            $prevButton.hide();
        }
        if(showNext){
            $nextButton.show();
        }else{
            $nextButton.hide();
        }
    },
    onCurrentVideoRangeIndexChanged: Ember.observer('currentVideoRangeIndex', function(){
        Ember.run.scheduleOnce('afterRender', function(){
            this.setVideoRange(this.get('currentVideoRangeIndex'));
            this.updateCarouselArrows();
        }.bind(this));
    }),
    setPlaylist(playlist){
        this.set('playlist', playlist);
        // this.setVideoRange(0);

        // .should it be here or somerwhere else?
        this.get('videoHistory').save(this.get('playlist.id'));
    },
    setVideoRange(index){
        let videoRange = this.get('playlist.videoRanges').objectAt(index);
        this.set('videoRangeIndex', index);
        this.set('videoRange', videoRange);
        let youtubeId = videoRange.get('video.youtubeId');
        let videoId = videoRange.get('video.id');
        let player = this.get('player');
        if(!player){
            this.initPlayer(youtubeId);
        }else{
            player.loadVideoById({
                'videoId': youtubeId,
                'startSeconds': videoRange.get('from'),
                'endSeconds': videoRange.get('to')
            });
        }
    },
    initPlayer(youtubeId){
        var player = new YT.Player('player', {
            height: '360',
            width: '640',
            videoId: youtubeId,
            events: {
                'onReady': this.onPlayerReady.bind(this),
                'onStateChange': this.onPlayerStateChange.bind(this)
            }
        });
        this.set('player', player);
    },
    getNextPlaylist(){
        return this.get('videoNavigator').getNextPlaylist(this.get('route'))
    },
    onPlayerReady(event) {
        event.target.seekTo(this.get('videoRange.from'), true);
    },
    onPlayerStateChange(event) {
        let timerId = this.get('timerId');
        if (event.data == YT.PlayerState.PLAYING) {
            if(!timerId){
                console.log('set interval');
                let player = event.target;
                let from = this.get('videoRange.from');
                let to = this.get('videoRange.to');
                this.set('timerId', window.setInterval(function(){
                    let position = player.getCurrentTime();
                    if(position > to){
                        timerId = this.get('timerId');
                        window.clearInterval(timerId);
                        let videoRangesCount = this.get('playlist.videoRanges.length');
                        let nextVideoRangeIndex = this.get('videoRangeIndex')+1;
                        if(nextVideoRangeIndex<videoRangesCount){
                            this.set('videoRangeIndex', nextVideoRangeIndex);
                        }else{
                            this.setPlaylist(this.getNextPlaylist());
                        }
                    }
                    this.set('videoRange.position', position);
                }.bind(this), 300)); 
            }
        }else if(event.data==YT.PlayerState.ENDED || event.data==YT.PlayerState.PAUSED){
            if(timerId){
                console.log('clear interval');
                window.clearInterval(timerId);
                this.set('timerId', null);
            }
        }
    },
    actions: {
        nextPlaylist(){
            this.setPlaylist(this.getNextPlaylist());
        }
    }
});