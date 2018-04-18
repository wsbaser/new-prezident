import Route from '@ember/routing/route';

export default Route.extend({
	model(params) {
 		// var model = this.get('store').peekRecord('video', params.video_id);
 		// return model;
 		return 'history';
	}
	// redirect(model, transition){
	//  	this.transitionTo('now', 'elections2018');
	// }
});