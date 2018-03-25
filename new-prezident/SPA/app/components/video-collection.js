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
    afterVideoRangeChanged: Ember.observer('currentVideoRangeIndex', function(){
        Ember.run.scheduleOnce('afterRender', function(){
            let currentVideoRangeIndex = this.get('currentVideoRangeIndex');

            let currentVideoRangeId = this.get('videoRange.id');
            let newVideoRangeId = this.get('playlist.videoRanges').objectAt(currentVideoRangeIndex).id;

            if(currentVideoRangeId!==newVideoRangeId){
                // . id changed, stop previos video
                this.stopPlaying();
            }

            this.setVideoRange(currentVideoRangeIndex);
        }.bind(this));
    }),
    setPlaylist(playlist){
        this.set('playlist', playlist);
        this.setVideoRange(0);
        this.get('videoHistory').save(playlist.id);
    },
    setVideoRange(index){
        let videoRange = this.get('playlist.videoRanges').objectAt(index);
        this.set('videoRangeIndex', index);
        this.set('videoRange', videoRange);
        this.updateCarouselArrows();
        this.preparePlaying(videoRange);
    },
    preparePlaying(videoRange){
        let initPlayerPromise = this.get('initPlayerPromise');
        if(videoRange && initPlayerPromise && !this.get('playingQueued')){
            this.set('playingQueued', true);
            console.log('prepare playing for ' + videoRange.id);
            initPlayerPromise.then(function(){
                this.loadVideoToPlayer(videoRange);
                Ember.run.scheduleOnce('afterRender', function(){
                    this.showPreviewOverlay();
                }.bind(this));
            }.bind(this));
        }
    },
    startPlaying(){
        this.hidePreviewOverlay().then(function(){
            this.get('player').playVideo();
        }.bind(this));
    },
    stopPlaying(){
        if(this.get('playingQueued')){
            this.set('playingQueued', false);
            this.get('player').pauseVideo();
            this.clearVideoTimer();
            this.set('videoRange.position', 0);
        }
    },
    hidePreviewOverlay(){
        return new Promise(function(resolve, reject){
            let $playerOverlay = this.$('#playerOverlay');
            let $speaker = $playerOverlay.find('.speaker');
            let $description = $playerOverlay.find('.description');
            $speaker.css('opacity', 0);
            $description.css('opacity', 0);
            setTimeout(function(){
                $playerOverlay.css('opacity', 0);
                setTimeout(function(){
                    $playerOverlay.hide();
                    this.set('previewOverlayState', 0);
                    resolve();
                }.bind(this), 300);
            }.bind(this), 1000);
        }.bind(this));
    },
    showPreviewOverlay(){
        this.set('previewOverlayState', 1);
        let $playerOverlay = this.$('#playerOverlay');
        let $speaker = $playerOverlay.find('.speaker');
        let $description = $playerOverlay.find('.description');
        $playerOverlay.show();
        $playerOverlay.css('opacity', 1);
        let showDescription = function(){
            $description.css('opacity', 1);
            setTimeout(function(){
                this.set('previewOverlayState', 2);
                if(this.get('readyToPlay')){
                    this.startPlaying();
                }
            }.bind(this), 3000);
        }.bind(this);
        let showSpeaker = function(){
            if($speaker[0]){
                $speaker.css('opacity', 1);
                setTimeout(showDescription, 3000);
            }else{
                showDescription();
            }
        };
        setTimeout(function(){
            showSpeaker();
        }, 300);
    },
    loadVideoToPlayer(videoRange){
        console.log('loadVideo: '+ videoRange.id);
        this.set('readyToPlay', false);
        this.get('player').loadVideoById({
            'videoId': videoRange.get('video.youtubeId'),
            'startSeconds': videoRange.get('from')
        });
    },
    initPlayer(){
        return new Promise(function(resolve, reject) {
            let onPlayerReady = function(e){ 
                resolve();
                this.onPlayerReady();
            }.bind(this);
            let player = new YT.Player('player', {
                height: '360',
                width: '640',
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': this.onPlayerStateChange.bind(this)
                },
                playerVars: {
                    controls: 0,
                    rel: 0,
                    showinfo: 0,
                    fs: 0
                }
            });
            this.set('player', player);
        }.bind(this));
    },
    getNextPlaylist(){
        return this.get('videoNavigator').getNextPlaylist(this.get('route'))
    },
    onPlayerReady(event) {
        this.hideLoader();
    },
    hideLoader(){
        this.$('#loaderContainer').css('visibility','hidden');
        setTimeout(function(){
            this.$('#videoContainer').css('visibility','visible');
        }.bind(this), 300);
    },
    onPlayerStateChange(event) {
        let player = event.target;
        if (event.data == YT.PlayerState.PLAYING) {
            switch(this.get('previewOverlayState')){
                case 0:
                    // . started laying after preview is hidden.
                    // . init position tracking timer
                    if(!this.get('timerId')){
                        this.initVideoTimer(event.target);
                    }
                    console.log('video PLAYING');
                    break;
                case 1:
                    // . video loading completed before preview is ready
                    // . pause playing and set readyToPlay to true
                    player.pauseVideo();
                    this.set('readyToPlay', true);
                    break
                case 2:
                    // . preview was ready before video loading completer
                    // . start playing
                    this.startPlaying();
                    break
            }
        }else if(event.data==YT.PlayerState.ENDED || event.data==YT.PlayerState.PAUSED){
            if(event.data==YT.PlayerState.ENDED ){
                console.log('video ENDED');
            }
            if(event.data==YT.PlayerState.PAUSED){
                console.log('video PAUSED');   
            }
        }
    },
    initVideoTimer(player){
        let timerId = window.setInterval(function(){
            let from = this.get('videoRange.from');
            let to = this.get('videoRange.to');
            let position = player.getCurrentTime();
            // console.log('old: '+oldPosition+', new: '+newPosition);

            if(position<=to){
                this.set('videoRange.position', position);
            }else{
                this.setNextVideoRange();
            }
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
        this.stopPlaying();
        if(this.get('videoRange')){
            this.set('videoRange.position', 0);
        }
        let nextPlaylist = this.getNextPlaylist();
        if(nextPlaylist){
            this.setPlaylist(nextPlaylist);
        }else{
            console.log('it was the last video.');
        }
    },
    setNextVideoRange(){
        this.stopPlaying();
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