import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		this.store.pushPayload({
					videos: [{
						id: 'elections2018',
						youtubeId: 'KuD0H_W8FDo',
						ranges: '20.5;'
					}]
				});
		return window.youTubeIframeAPIPromise;
	}
});