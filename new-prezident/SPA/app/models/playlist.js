import DS from 'ember-data';
import { belongsTo, hasMany } from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default DS.Model.extend({
	name: attr('string'),
	description: attr('string'),
	videoRanges: hasMany('video-range', { inverse: null }),
	route: attr('string')
});