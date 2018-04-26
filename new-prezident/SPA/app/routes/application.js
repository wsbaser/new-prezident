import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		localStorage.removeItem("videoHistory");
		this.store.pushPayload({
			cites:[{
				id: "platon",
				text: "ПЕРВЕЙШАЯ ЗАДАЧА ТИРАНА - ПОСТОЯННО ВОВЛЕКАТЬ СТРАНУ В ВОЙНЫ, ЧТОБЫ НАРОД НУЖДАЛСЯ В ПРЕДВОДИТЕЛЕ. ЕСЛИ ТИРАН ЗАПОДОЗРИТ ЛЮДЕЙ В ВОЛЬНЫХ МЫСЛЯХ, ИЛИ МЫСЛЯХ О НЕНУЖНОСТИ ЕГО ПРАВЛЕНИЯ - ОН УНИЧТОЖИТ ИХ ПОД ПРЕДЛОГОМ, ЧТО ОНИ ПРОДАЛИСЬ ВРАГУ.",
				author: "Платон, IV в до н.э."
			},{
				id: "freud",
				text: "МАССЫ НИКОГДА НЕ ЖАЖДАЛИ ЗНАТЬ ПРАВДУ. ИМ НУЖНЫ ИЛЛЮЗИИ, БЕЗ КОТОРЫХ ОНИ ЖИТЬ НЕ МОГУТ. НЕРЕАЛЬНОЕ ДЛЯ НИХ ВСЕГДА ПРЕВАЛИРУЕТ НАД РЕАЛЬНЫМ, И ФАЛЬШЬ ВОЗДЕЙСТВУЕТ НА НИХ С НЕ МЕНЬШЕЙ СИЛОЙ, ЧЕМ ПРАВДА. ОНИ ПОПРОСТУ НЕ ОТЛИЧАЮТ ОДНО ОТ ДРУГОГО",
				author: "Зигмунд Фрейд"
			}],
			playlists: [{
					id: 'votsarenie',
					route: 'history',
					name: 'Путин. Приход к власти',
					description: 'Описание',
					videoRanges: ['vts7','vts6','vts5', 'vts3', 'vts4','vts1', 'vts2']
				},
				{
					id: 'propaganda',
					route: 'now',
					name: 'Пропаганда',
					description: 'Описание пропаганда',
					videoRanges: ['propaganda_1_range', 'propaganda_2_range', 'propaganda_3_range'],
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
					id: 'vts3',
					from: 12,
					to: 88,
					speaker: 'Анна Политковская',
					description: 'о том как война в Чечне помогла Путину стать президентом',
					video: 'politkovskaya_putin_war'
				},{
					id: 'vts4',
					from: 932.5,
					to: 1001,
					speaker: 'Артем Боровик',
					description: 'о роли войны для популярности Путина',
					video: 'borovic_war_for_pr'
				},{
					id: 'vts5',
					from: 1043.5,
					to: 1518.7,
					speaker: 'Борис Березовский',
					description: 'о списке кандидатов на роль президента и о роли преемственности',
					video: 'gordon_berezovsky_2012_1'
				},{
					id: 'vts6',
					from: 219,
					to: 319.3,
					speaker: 'Борис Березовский',
					description: 'первое предложение Путину',
					video: 'gordon_berezovsky_2007_2'
				},{
					id: 'vts7',
					from: 0,
					to: 231,
					speaker: 'Борис Немцов',
					description: 'о том, почему Ельцин выбрал Путина',
					video: 'nemtsov_eltcins_choice'
				},
				{
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
				},
				{
					id: 'borovic_war_for_pr',
					youtubeId: 'xqDqFbhiV-k',
					channel: 'openuniversity'
				},{
					id: 'politkovskaya_putin_war',
					youtubeId: 'vlN91jrnkZ8',
					channel: 'openuniversity'
				},
				{
					id: 'gordon_berezovsky_2012_1',
					youtubeId: 'yqTUqYuKPVM',
					channel: 'gordon'
				},
				{
					id: 'gordon_berezovsky_2007_2',
					youtubeId: 'C0O7d9ZyQFQ',
					channel: 'gordon'
				},
				{
					id: 'nemtsov_eltcins_choice',
					youtubeId: '2LIstvYImSU',
					channel: 'openuniversity'
				},
				{
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
				},{
					id: 'gordon',
					name: 'В гостях у Гордона',
					youtubeId: 'UCCcprrrcbdaj14kYPjcbj9w',
					logoUrl: 'https://yt3.ggpht.com/-A8a8PrspQ2I/AAAAAAAAAAI/AAAAAAAAAAA/yqYE6zboWGc/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
				}]
			});
		return window.youTubeIframeAPIPromise;
	}
});