import Route from '@ember/routing/route';

export default Route.extend({
	videoNavigator: Ember.inject.service(),
	model(params){
		return this.get('store').peekRecord('playlist', params.playlist_id);
	},
	afterModel(model){
		this.controllerFor('time').setPlaylist(model);
	}
});
