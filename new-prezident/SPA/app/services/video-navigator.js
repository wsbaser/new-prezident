import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
	router: Ember.inject.service(),
	store: Ember.inject.service(),
	videoHistory: Ember.inject.service(),
	getAllFor(route){
		return this.get('store').peekAll('playlist').filterBy('route', route);
	},
	getAllExcept(route){
		return this.get('store').peekAll('playlist').rejectBy('route', route);
	},
	getNextPlaylist(route){
		return this.selectRandomFrom(this.getAllExcept(route));
	},
	getPlaylistFor(route){
		return this.selectRandomFrom(this.getAllFor(route));
	},
	selectRandomFrom(allPlaylists){
		let watched = this.get('videoHistory').get();
		let notWatched = allPlaylists.reject(function(item){
			return watched.includes(item.id);
		});

		let playlists = notWatched.length? notWatched: allPlaylists;
		return playlists[Math.floor(Math.random() * playlists.length)];
	}
});
