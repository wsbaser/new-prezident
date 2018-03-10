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
		return Math.floor((to-from)/60);
	})
});
