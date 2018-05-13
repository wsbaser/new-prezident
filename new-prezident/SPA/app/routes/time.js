import Route from '@ember/routing/route';

export default Route.extend({
	videoNavigator: Ember.inject.service(),
	model(params) {
		return params.route_id.toLowerCase();
	},
	afterModel(model, transition){
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
	// setupController(controller, model){
	//    this._super(controller, model);
	//    controller.setNextPlayList();
	// }
});
