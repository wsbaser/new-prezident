import Route from '@ember/routing/route';

export default Route.extend({
	redirect(model, transition){
		this.transitionTo('index', 'history');
	}
});
