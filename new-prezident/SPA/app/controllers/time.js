import Controller from '@ember/controller';

export default Controller.extend({
	videoNavigator: Ember.inject.service(),
	videoHistory: Ember.inject.service(),
	playlists: Ember.computed('model', function(){
		return this.get('store').peekAll('playlist').filterBy('route', this.get('model'));
	}),
    setNextPlayList(){
        // this.stopPlaying();
        // if(this.get('videoRange')){
        //     this.set('videoRange.position', 0);
        // }
        let nextPlaylist = this.getNextPlaylist();
        if(nextPlaylist){
            this.setPlaylist(nextPlaylist);
        }else{
            console.log('it was the last video.');
        }
    },
    getNextPlaylist(){
        return this.get('videoNavigator').getNextPlaylist(this.get('model'))
    },
    setPlaylist(playlist){
    	this.set('playlist', playlist);
    	this.get('videoHistory').save(playlist.id);
    },
	actions: {
        nextPlaylist(){
            this.setNextPlayList();    
        },
        hideLoader(){
			$('#loaderContainer').css('visibility','hidden');
			setTimeout(function(){
            	$('#videoContainer').css('visibility','visible');
        	}.bind(this), 300);
        }
    }
});
