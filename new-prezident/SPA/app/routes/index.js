import Route from '@ember/routing/route';

export default Route.extend({
	citesHistory: Ember.inject.service(),
	model(){
		let allCites = this.get('store').peekAll('cite');

		if(window.isMobile){
			allCites = allCites.filter(c=>c.get('text').length<100);
		}

		let watchedCites = this.get('citesHistory').get();
		let notWatched = allCites.reject(function(item){
			return watchedCites.includes(item.id);
		});
		var todayCite;
		if(notWatched.get('length')){
			todayCite = notWatched.get('firstObject');
		}else{
			this.get('citesHistory').clear();
			todayCite = allCites.get('firstObject');
		}
		this.get('citesHistory').save(todayCite.id);
		return todayCite;
	}
});