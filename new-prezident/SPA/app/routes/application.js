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
			},{
				id: "hoking",
				text: "Главный враг знания — не невежество, а иллюзия знания",
				author: "Стивен Хокинг"
			}, {
				id: 'orwell',
				text: '– В вашем восстановлении три этапа, – сказал О’Брайен, – Учеба, понимание и принятие.',
				author: 'Джордж Оруэлл, "1984"'
			},{
				id:'mirzoev',
				text: 'Человечество долго и мучительно шло к политической и экономической конкуренции, к свободе слова. Это и есть иммунная система государства. Если вы разрушили иммунную систему страны, ждите обвала всей системы от любого чиха.',
				author: 'режиссер Владимир Мирзоев'
			}],
			playlists: [{
					id: 'votsarenie',
					route: 'history',
					name: 'Путин. Приход к власти',
					description: 'Описание',
					videoRanges: ['vts1', 'vts2', 'vts4', 'vts3', 'vts5','vts6','vts7']
				},
				{
					id: 'propaganda',
					route: 'now',
					name: 'Пропаганда',
					description: 'Описание пропаганда',
					videoRanges: ['propaganda_1_range', 'propaganda_2_range', 'propaganda_3_range','tv_vs_streets_range','slavyanskboy_range','statisticslies_range','boingversions_range'],
				},
				{
					id: 'accomodation',
					route: 'future',
					name: 'Город в котором хочется жить',
					description: 'Описание',
					videoRanges: [],
				}],
			videoRanges:[{
					id: 'vts1',
					from: 745,
					to: 1606.5,
					speaker: 'Сергей Доренко',
					description: 'Как создавалась партия "Единая Россия"',
					video: 'dorenkoputin'
				},
				{
					id: 'vts2',
					from: 1972.3,
					to: 2091,
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
					description: 'о роли войны в популярности Путина',
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
					description: 'о том, почему Борис Ельцин выбрал преемником Путина',
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
				},{
					id: 'tv_vs_streets_range',
					from: 9.1,
					to: 453,
					description: 'Как кремлевские СМИ освещают митинги оппозиции',
					video: 'tv_vs_streets'
				},{
					id: 'boingversions_range',
					from: 6.1,
					to: 390,
					description: 'Как менялись версии кремлевских СМИ о сбитом над Донбасом малазийском боинге',
					video: 'boeingversions'
				},{
					id: 'statisticslies_range',
					from: 8.5,
					to: 237.8,
					description: 'Искажение статистики В. Путиным на прямой линии 2017-го года',
					video: 'statisticslies'
				},{
					id: 'spech_freedom_control_range',
					from: 24,
					to: 546,
					description: 'Хроника уничтожения свободы слова при В. Путине',
					video: 'spech_freedom_control'
				},{
					id: 'slavyanskboy_range',
					from: 0,
					to: 310,
					description: 'Фейк Первого канала о распятом мальчике в Славянске',
					video: 'slavyanskboy'
				}],
			videos: [{
					id: 'dorenkoputin',
					youtubeId: 'phr4nUI_5CQ',
					channel: 'nparchive'
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
				},{
					id: 'tv_vs_streets',
					youtubeId: 'PM0ugwbBgh4',
					channel: 'alternative'
				},{
					id: 'spech_freedom_control',
					youtubeId: 'TjLKq3wLGco',
					channel: 'alternative'
				},{
					id: 'boeingversions',
					youtubeId: 'I-9fRjhWFvo',
					channel: 'putinregimelies'
				},{
					id: 'statisticslies',
					youtubeId: 'KUd1w-hK1zc',
					channel: 'putinregimelies'
				},{
					id: 'slavyanskboy',
					youtubeId: '_-SxR16JCCY',
					channel: 'rtvi'
				}],
			channels: [{
					id: 'rtvi',
					name: 'RTVI',
					youtubeId: 'UCPU28A9z_ka_R5dQfecHJlA',
					logoUrl: 'https://yt3.ggpht.com/-CnMwEbuTBrY/AAAAAAAAAAI/AAAAAAAAAAA/RHfN_cYaKEk/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
				},{
					id: 'putinregimelies',
					name: 'Ложь путинского режима',
					youtubeId: 'UCBReV5bfLRI8pFtTrokH7mw',
					logoUrl: 'https://yt3.ggpht.com/-l0nxYVNJeWU/AAAAAAAAAAI/AAAAAAAAAAA/DRX_yR9aOb0/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
				},{
					id: 'alternative',
					name: 'ALTERNATIVE MEDIA',
					youtubeId: 'UCS9DnIddkX6LhV8h4mCuW2Q',
					logoUrl: 'https://yt3.ggpht.com/-TrSfpyquPAM/AAAAAAAAAAI/AAAAAAAAAAA/7GxVqYWCWtY/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
				},{
					id: 'nparchive',
					name: 'Архив newprezident.ru',
					youtubeId: 'UCwEN4wbUR0eM4uVSeBefPoA',
					logoUrl: 'https://yt3.ggpht.com/-4p862zcrijI/AAAAAAAAAAI/AAAAAAAAAAA/a2-CRhE8IH0/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
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
		// ,
		// 		{
		// 			id: 'smi',
		// 			route: 'history',
		// 			name: 'Захват СМИ',
		// 			videoRanges: ['']
		// 		},
		// 		{
		// 			id: 'beslan',
		// 			route: 'history',
		// 			name: 'Беслан (18+)',
		// 			videoRanges: ['']
		// 		},
		// 		{
		// 			id: 'nordost',
		// 			route: 'history',
		// 			name: 'Захват Норд-Ост',
		// 			videoRanges: ['']
		// 		},{
		// 			id: 'politkovskaya',
		// 			route: 'history',
		// 			name: 'Политковская',
		// 			videoRanges: ['']
		// 		},{
		// 			id: 'elections2011',
		// 			route: 'history',
		// 			name: 'Выборы 2011',
		// 			videoRanges: ['']
		// 		}
		// ,{
		// 			id: 'elections',
		// 			route: 'now',
		// 			name: 'Демократические институты: Выборы',
		// 			videoRanges: ['e1', 'e2']
		// 		}
	}
});