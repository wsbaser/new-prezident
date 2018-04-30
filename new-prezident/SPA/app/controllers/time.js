import Controller from '@ember/controller';

export default Controller.extend({
	playlists: Ember.computed('model', function(){
		return this.get('store').peekAll('playlist').filterBy('route', this.get('model'));
	})
});
