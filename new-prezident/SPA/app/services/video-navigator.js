import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
	router: Ember.inject.service(),
	store: Ember.inject.service(),
	videoHistory: Ember.inject.service(),
	getAllFor(route){
		return this.get('store').peekAll('playlist').filterBy('route', route);
	},
	getNextPlaylist(route){
		let watched = this.get('videoHistory').get();
		let notWatched = this.getAllFor(route).reject(function(item){
			return watched.includes(item.id);
		});
		//return notWatched[Math.floor(Math.random() * notWatched.length)];
		return this.get('store').peekRecord('playlist','votsarenie');
	}
});
