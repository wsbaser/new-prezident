import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
	youtubeId: attr('string'),
	channel: belongsTo('channel')
});