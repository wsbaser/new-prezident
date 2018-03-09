import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    videoNavigator: Ember.inject.service(),
    videoHistory: Ember.inject.service(),
    playlist: null,
	didInsertElement(){
        this.setPlaylist(this.getNextPlaylist());
	},
    setPlaylist(playlist){
        this.set('playlist', playlist);
        let videoRange = this.get('playlist.videoRanges').get('firstObject');
        this.setVideoRange(videoRange);

        // .should it be here or somerwhere else?
        this.get('videoHistory').save(this.get('playlist.id'));
    },
    setVideoRange(videoRange){
        this.set('videoRange', videoRange);
        let youtubeId = videoRange.get('video.youtubeId');
        let videoId = videoRange.get('video.id');
        let player = this.get('player');
        if(!player){
            this.initPlayer(youtubeId);
        }else{
            player.loadVideoById(youtubeId);
            player.seekTo(videoRange.get('from'), true);
        }
    },
    initPlayer(youtubeId){
        var player = new YT.Player('player', {
            height: '360',
            width: '640',
            videoId: youtubeId,
            events: {
                'onReady': this.onPlayerReady.bind(this),
                'onStateChange': this.onPlayerStateChange
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
        // if (event.data == YT.PlayerState.PLAYING && !done) {
        //   //setTimeout(stopVideo, 6000);
        //   done = true;
        // }
    },
    actions: {
        nextVideo(){
            this.setPlaylist(this.getNextPlaylist());
        }
    }
});