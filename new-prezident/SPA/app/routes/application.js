import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		localStorage.clear()
		this.store.pushPayload({
			playlists: [{
					id: 'elections',
					route: 'now',
					name: 'Выборы',
					description: 'Описание выборы',
					videoRanges: ['e1']
				},
				{
					id: 'propaganda',
					route: 'now',
					name: 'Пропаганда',
					description: 'Описание пропаганда',
					videoRanges: ['p1'],
				}],
			videoRanges:[{
					id: 'e1',
					from: 20.5,
					to: null,
					description: 'elections2018',
					video: 'elections2018'
				},{
					id: 'p1',
					from: 10,
					to: 100,
					description: 'illegalprezident',
					video: 'illegalprezident'
				}],
			videos: [{
					id: 'elections2018',
					youtubeId: 'KuD0H_W8FDo',
				},
				{
					id: 'illegalprezident',
					youtubeId: 'oqN1bQ7w89c',
				}]
			});
		return window.youTubeIframeAPIPromise;
	}
});