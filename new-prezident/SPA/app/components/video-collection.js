import Component from '@ember/component';

export default Component.extend({
	video: null,
	didRender(){
		var youtubeId = this.get('video.youtubeId');
		var player = new YT.Player('player', {
        	height: '360',
        	width: '640',
        	videoId: youtubeId,
        	events: {
        		'onReady': this.onPlayerReady,
            	'onStateChange': this.onPlayerStateChange
          	}
        });
		this.set('player', player);
	},
    onPlayerReady(event) {
        event.target.seekTo(20.5, true);
    },
    onPlayerStateChange(event) {
        // if (event.data == YT.PlayerState.PLAYING && !done) {
        //   //setTimeout(stopVideo, 6000);
        //   done = true;
        // }
    }
});