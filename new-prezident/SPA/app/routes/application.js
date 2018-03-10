import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		localStorage.clear()
		this.store.pushPayload({
			playlists: [{
					id: 'elections',
					route: 'now',
					name: 'Демократические институты: Выборы',
					description: 'Описание выборы',
					videoRanges: ['e1', 'e2']
				},
				{
					id: 'propaganda',
					route: 'now',
					name: 'Пропаганда на ТВ и в сети',
					description: 'Описание пропаганда',
					videoRanges: ['p1'],
				}],
			videoRanges:[{
					id: 'e1',
					from: 20.5,
					to: 180,
					description: 'Выборы 2018. Часть 1.',
					video: 'elections2018_p1'
				},{
					id: 'e2',
					from: 20.5,
					to: 600,
					description: 'Выборы 2018. Часть 2.',
					video: 'elections2018_p2'
				},{
					id: 'p1',
					from: 10,
					to: 100,
					description: 'illegalprezident',
					video: 'illegalprezident'
				}],
			videos: [{
					id: 'elections2018_p1',
					youtubeId: '6kDqTi_xKoo',
					channel: 'universeofhistory'
				},{
					id: 'elections2018_p2',
					youtubeId: 'KuD0H_W8FDo',
					channel: 'universeofhistory'
				},
				{
					id: 'illegalprezident',
					youtubeId: 'oqN1bQ7w89c',
					channel: 'sotavision'
				}],
			channels: [{
					id: 'sotavision',
					name: 'sotavision',
					logoUrl: 'https://yt3.ggpht.com/-4p862zcrijI/AAAAAAAAAAI/AAAAAAAAAAA/a2-CRhE8IH0/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
				},
				{
					id: 'universeofhistory',
					name: 'Вселенная Истории',
					logoUrl: 'https://yt3.ggpht.com/-7I0BUCNSPPA/AAAAAAAAAAI/AAAAAAAAAAA/jUT_5vtw6CY/s88-c-k-no-mo-rj-c0xffffff/photo.jpg'
				}]
			});
		return window.youTubeIframeAPIPromise;
	}
});