import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    elementId: 'videoCollection',
    playlist: null,
    videoRangeIndex: 0,
    currentVideoRangeIndex: -1,
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
    onPlaylistChanged: Ember.observer('playlist', function(){
        this.stopPlaying();
        // if(this.get('videoRange')){
        //     this.set('videoRange.position', 0);
        // }
        this.setVideoRange(0);
    }),
    setVideoRange(index){
        let videoRange = this.get('playlist.videoRanges').objectAt(index);
        this.set('videoRangeIndex', index);
        this.set('videoRange', videoRange);
        this.updateCarouselArrows();
        this.preparePlaying(videoRange);
    },
    stopPreviewAnimation(){
        let animation = this.get('animation');
        if(animation){
            animation.pause();
            this.$('#playerOverlay .speaker, #playerOverlay .description, #playerOverlay .start-playing').hide().css('opacity', 0);
            this.$('#playerOverlay .piechart-loader .wrapper').hide();
        }
    },
    preparePlaying(videoRange){
        let initPlayerPromise = this.get('initPlayerPromise');
        if(videoRange && initPlayerPromise && !this.get('playingQueued')){
            this.set('playingQueued', true);
            this.stopPreviewAnimation();
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
            this.get('player').unMute();
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
        this.set('previewOverlayState', 3);
        return new Promise(function(resolve, reject){
            let animationTimeline = anime.timeline()
              .add({
                targets: '#playerOverlay .speaker, #playerOverlay .description, #playerOverlay .start-playing',
                opacity: 0,
                easing: 'linear',
                duration: 300
              })
              .add({
                targets: '#playerOverlay',
                opacity: 0,
                duration: 300,
                delay: 700,
                complete: function(){
                    resolve();
                    $('#playerOverlay').hide();
                    $('#playerOverlay .piechart-loader .wrapper').hide(); // need to restart animation
                    this.set('previewOverlayState', 0);
                }.bind(this)
              });
            this.set('animation', animationTimeline);
        }.bind(this));
    },
    showPreviewOverlay(){
        this.set('previewOverlayState', 1);

        let $playerOverlay = this.$('#playerOverlay');
        let $speaker = $playerOverlay.find('.speaker');
        let $description = $playerOverlay.find('.description');
        let $startPlaying = $playerOverlay.find('.start-playing');
        let $wrapper = $playerOverlay.find('.piechart-loader .wrapper');
        
        $playerOverlay.show();
        $speaker.show();
        $description.show();
        $startPlaying.show();

        let description = this.get('videoRange.description');
        $description.html(description.replace(/([^\x00-\x80]|\w|\.|,|-|"|\?)/g, "<span class='letter'>$&</span>"));

        let animationTimeline = anime.timeline()
          .add({
            targets: '#playerOverlay',
            opacity: 1,
            easing: 'linear',
            duration: 300,
          })
          .add({
            targets: '#playerOverlay .speaker, #playerOverlay .description',
            opacity: 1,
            easing: 'linear',
            duration: 300,
            delay: 500,
          })
          .add({
            targets: '#playerOverlay .description .letter',
            translateX: [40,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 500,
            delay: function(el, i) {
              return 500 + 40 * i;
            }
          })
          .add({
            targets: '#playerOverlay .start-playing',
            opacity: 1,
            easing: "linear",
            duration: 500,
            complete: function() {
                this.set('previewOverlayState', 2);
                $wrapper.css('display', 'inline-block');
                setTimeout(function(){
                    if(this.get('previewOverlayState')==2){
                        // if(this.get('readyToPlay')){
                            this.startPlaying();
                        // }
                    }
                }.bind(this), 10000);
            }.bind(this)
          });

          this.set('animation', animationTimeline);
    },
    loadVideoToPlayer(videoRange){
        console.log('loadVideo: '+ videoRange.id);
        this.set('readyToPlay', false);
        this.get('player').mute();
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
    onPlayerReady(event) {
        this.get('onHideLoader')();
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
    setNextVideoRange(){
        this.stopPlaying();
        let videoRangesCount = this.get('playlist.videoRanges.length');
        let nextVideoRangeIndex = this.get('videoRangeIndex')+1;
        if(nextVideoRangeIndex<videoRangesCount){
            this.set('videoRangeIndex', nextVideoRangeIndex);
        }else{
            this.get('onPlaylistFinished')();
        }
    },
    actions: {
        onStartPlaying(){
            this.startPlaying();
        }
    }
});