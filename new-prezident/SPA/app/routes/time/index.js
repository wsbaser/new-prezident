import Route from '@ember/routing/route';

export default Route.extend({
	videoNavigator: Ember.inject.service(),
	beforeModel(/* transition */) {
		let playlist = this.get('videoNavigator').getNextPlaylist(this.modelFor('time'));
		this.transitionTo('time.playlist', playlist.get('route'), playlist.id);
  	}
});
