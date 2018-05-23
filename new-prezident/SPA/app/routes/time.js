import Route from '@ember/routing/route';

export default Route.extend({
	videoNavigator: Ember.inject.service(),
	model(params) {
		return params.route_id.toLowerCase();
	},
	afterModel(model, transition){
		$('title').html(this.getTitle(model));
		switch(model){
			case 'history':
			case 'now':
			case 'future':
				break;
			default:
				let playlist_id = model;
 				var playlist = this.get('store').peekRecord('playlist', playlist_id);
 				if(!playlist){
 					// invalid url
 					playlist = this.get('videoNavigator').getNextPlaylist();
 					// can it return null?
 				}
 				this.transitionTo('time.playlist', playlist.get('route'), playlist.id);
				break;
		}
	},
	getTitle(time){
		switch(time){
			case 'history':
				return "Np - ИСТОРИЯ";
			case 'now':
				return "Np - 2018"
			case 'future':
				return "Np - БУДУЩЕЕ";
		}
	}
});
