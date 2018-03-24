import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    videoNavigator: Ember.inject.service(),
    videoHistory: Ember.inject.service(),
    playlist: null,
    videoRangeIndex: 0,
    currentVideoRangeIndex: -1,
    didReceiveAttrs(){
        this._super(...arguments);
        this.setNextPlayList();
    },
	didInsertElement(){
        this._super(...arguments);
        this.set('initPlayerPromise', this.initPlayer());
	},
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
            this.stopCurrentVideo();
            this.setVideoRange(this.get('currentVideoRangeIndex'));
        }.bind(this));
    }),
    setPlaylist(playlist){
        this.set('playlist', playlist);
        this.setVideoRange(0);
        this.get('videoHistory').save(playlist.id);
    },
    setVideoRange(index){
        this.set('videoRangeIndex', index);
        let videoRange = this.get('playlist.videoRanges').objectAt(index);
        this.set('videoRange', videoRange);
        this.loadVideoToPlayer(videoRange);
        this.updateCarouselArrows();
    },
    stopCurrentVideo(){
        if(this.get('videoRange')){
            this.set('videoRange.position', 0);
        }
        if(this.get('playing')){
            console.log('stop video');
            this.get('player').pauseVideo();
        }
    },
    loadVideoToPlayer(videoRange){
        if(videoRange && this.get('initPlayerPromise')){
            console.log('loadVideo: '+ videoRange.id);
            this.get('initPlayerPromise').then(function(){
                this.get('player').loadVideoById({
                    'videoId': videoRange.get('video.youtubeId'),
                    'startSeconds': videoRange.get('from'),
                    'endSeconds': videoRange.get('to')
                });
            }.bind(this));
        }
    },
    initPlayer(){
        return new Promise(function(resolve, reject) {
            let onPlayerReady = function(e){ resolve(); };
            let player = new YT.Player('player', {
                height: '360',
                width: '640',
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': this.onPlayerStateChange.bind(this)
                }
            });
            this.set('player', player);
        }.bind(this));
    },
    getNextPlaylist(){
        return this.get('videoNavigator').getNextPlaylist(this.get('route'))
    },
    // onPlayerReady(event) {
    //     event.target.seekTo(this.get('videoRange.from'), true);
    // },
    onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
            this.set('playing', true);
            console.log('video PLAYING');
            if(!this.get('timerId')){
                this.initVideoTimer(event.target);
            }
        }else if(event.data==YT.PlayerState.ENDED || event.data==YT.PlayerState.PAUSED){
            this.clearVideoTimer();
            if(event.data==YT.PlayerState.ENDED ){
                console.log('video ENDED');
                if(this.get('playing')){
                    this.set('playing', false);
                    this.setNextVideoRange();
                }
            }
            if(event.data==YT.PlayerState.PAUSED){
                console.log('video PAUSED');   
            }
        }
    },
    initVideoTimer(player){
        let timerId = window.setInterval(function(){
            this.set('videoRange.position', player.getCurrentTime());
        }.bind(this), 500);
        this.set('timerId', timerId);
    },
    clearVideoTimer(){
        let timerId = this.get('timerId');
        if(timerId){
            window.clearInterval(timerId);
            this.set('timerId', null);
        }
    },
    setNextPlayList(){
        this.stopCurrentVideo();
        let nextPlaylist = this.getNextPlaylist();
        if(nextPlaylist){
            this.setPlaylist(nextPlaylist);
        }else{
            console.log('it was the last video.');
        }
    },
    setNextVideoRange(){
        let videoRangesCount = this.get('playlist.videoRanges.length');
        let nextVideoRangeIndex = this.get('videoRangeIndex')+1;
        if(nextVideoRangeIndex<videoRangesCount){
            this.set('videoRangeIndex', nextVideoRangeIndex);
        }else{
            this.setNextPlayList();
        }
    },
    actions: {
        nextPlaylist(){
            this.setNextPlayList();    
        }
    }
});