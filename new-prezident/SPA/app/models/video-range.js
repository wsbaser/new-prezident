import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
	video: belongsTo('video'),
	description: attr('string'),
	from: attr('number'),
	to: attr('number'),
	position: attr('number'),
	minutes: Ember.computed('from','to', function(){
		let from = this.get('from');
		let to = this.get('to');
		return Math.ceil((to-from)/60);
	}),
	positionTime: Ember.computed('position', function(){
		let totalSeconds = this.get('position') || this.get('from');
		let minutes = Math.floor(totalSeconds/60);
		let seconds = Math.floor(totalSeconds%60);
		return minutes+':'+seconds;
	})
});
