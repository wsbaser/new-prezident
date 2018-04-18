import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		localStorage.clear()
		this.store.pushPayload({
			playlists: [{
					id: 'votsarenie',
					route: 'history',
					name: 'Путин. Приход к власти',
					videoRanges: ['vts1', 'vts2']
				},
				{
					id: 'smi',
					route: 'history',
					name: 'Захват СМИ',
					videoRanges: ['']
				},
				{
					id: 'beslan',
					route: 'history',
					name: 'Беслан (18+)',
					videoRanges: ['']
				},
				{
					id: 'nordost',
					route: 'history',
					name: 'Захват Норд-Ост',
					videoRanges: ['']
				},{
					id: 'politkovskaya',
					route: 'history',
					name: 'Политковская',
					videoRanges: ['']
				},{
					id: 'elections2011',
					route: 'history',
					name: 'Политковская',
					videoRanges: ['']
				},{
					id: 'elections',
					route: 'now',
					name: 'Демократические институты: Выборы',
					videoRanges: ['e1', 'e2']
				},
				{
					id: 'propaganda',
					route: 'now',
					name: 'Пропаганда',
					description: 'Описание пропаганда',
					videoRanges: ['propaganda_1_range', 'propaganda_2_range', 'propaganda_3_range'],
				}],
			videoRanges:[{
					id: 'vts1',
					from: 771.8,
					to: 1652,
					speaker: 'Сергей Доренко',
					description: 'Как создавалась партия "Единая Россия"',
					video: 'dorenkoputin'
				},
				{
					id: 'vts2',
					from: 2019.8,
					to: 2137.5,
					speaker: 'Сергей Доренко',
					description: 'Как Березовский уговорил Путина стать президентом',
					video: 'dorenkoputin'
				},{
					id: 'e1',
					from: 20.5,
					to: 30,
					description: 'Выборы 2018. Часть 1.',
					video: 'elections2018_p1'
				},{
					id: 'e2',
					from: 20.5,
					to: 30,
					description: 'Президентские выборы. Почему нет конкуренции.',
					video: 'elections2018_p2'
				},{
					id: 'p1',
					from: 10,
					to: 20,
					speaker: 'Сергей Александрович Филатов',
					description: 'о нелегитимности 3-го президентского срока.',
					video: 'illegalprezident'
				},{
					id: 'propaganda_1_range',
					from: 12,
					to: 300.5,
					speaker: 'Открытый университет',
					description: 'Как менялась пропаганда',
					video: 'propaganda_1'
				},{
					id: 'propaganda_2_range',
					from: 12,
					to: 287.3,
					speaker: 'Открытый университет',
					description: 'Как работает пропаганда',
					video: 'propaganda_2'
				},{
					id: 'propaganda_3_range',
					from: 12,
					to: 286,
					speaker: 'Открытый университет',
					description: 'Как распознать пропаганду',
					video: 'propaganda_3'
				}],
			videos: [{
					id: 'dorenkoputin',
					youtubeId: 'ErI8CPUDPXY',
					channel: 'beincourse'
				},{
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
				},
				{
					id: 'propaganda_1',
					youtubeId: 'vUfuK-kGPdc',
					channel: 'openuniversity'
				},
				{
					id: 'propaganda_2',
					youtubeId: 'hq0QzTUMjhk',
					channel: 'openuniversity'
				},
				{
					id: 'propaganda_3',
					youtubeId: '9HZFIAH1hnY',
					channel: 'openuniversity'
				}],
			channels: [{
					id: 'beincourse',
					name: 'Быть в курсе',
					youtubeId: 'UC1tFWEY-XuY7fOFLGj7sWcA',
					logoUrl: 'https://yt3.ggpht.com/a-/AJLlDp1m0UdUYnpHPnLJ1RZPzcqeSvseuYkAWs0xxw=s88-mo-c-c0xffffffff-rj-k-no'
				},{
					id: 'sotavision',
					name: 'sotavision',
					youtubeId: 'UCk9F6pe9Z2IPxm1VO9lS6NA',
					logoUrl: 'https://yt3.ggpht.com/-4p862zcrijI/AAAAAAAAAAI/AAAAAAAAAAA/a2-CRhE8IH0/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
				},
				{
					id: 'universeofhistory',
					name: 'Вселенная Истории',
					youtubeId: 'UC42ZrgA4ezCWVm8RHnS-xNA',
					logoUrl: 'https://yt3.ggpht.com/-7I0BUCNSPPA/AAAAAAAAAAI/AAAAAAAAAAA/jUT_5vtw6CY/s88-c-k-no-mo-rj-c0xffffff/photo.jpg'
				},{
					id: 'openuniversity',
					name: 'Открытый университет',
					youtubeId: 'UCG1i_bM5A4JMNjBszBOCasw',
					logoUrl: 'https://yt3.ggpht.com/-lutbsJAOAfY/AAAAAAAAAAI/AAAAAAAAAAA/JpMbFk20ls8/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
				}]
			});
		return window.youTubeIframeAPIPromise;
	}
});