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
					description: '9-го августа 1999 г. Владимир Путин становится премьер министром, за полгода его рейтинг вырастает с 1.5 до 53% и он страновится президентом. Но что было до 9-го августа? Почему именно Путин? И могла ли история пойти по другому сценарию?',
					videoRanges: ['vts1', 'vts2', 'vts7', 'vts4', 'vts3', 'eltsin_first_offer', 'vts5', 'vts6']
				},
				{
					id: 'propaganda',
					route: 'now',
					name: 'Пропаганда',
					description: 'Пропаганда - это предвзятая информация, распространяемая с целью убедить людей в  верности определенного мнения или позиции. Чтобы не попасть под ее влияние, необходимо знать как она работает.',
					videoRanges: ['propaganda_1_range', 'propaganda_2_range', 'propaganda_3_range','tv_vs_streets_range', 'boingversions_range' ,'slavyanskboy_range','statisticslies_range'],
				},
				{
					id: 'modernhousing',
					route: 'future',
					name: 'Современное жильё',
					description: 'Современное жилье - это не только просторные дома с качественной отделкой. Это благоустройство дворов и зон отдыха, детские площадки, доступный транспорт и много других мелочей, которые делают городскую среду безопасной и комфортной.',
					videoRanges: ['houses_finland_1_range', 'houses_finland_2_range','houses_nz_range','houses_sweden_range','publicspace_london_range'],
				},
				{
					id: 'mediacontrol',
					route: 'history',
					name: 'Уничтожение независимых СМИ',
					description: 'Независимые СМИ - это демократический инититут, который позволяет оценивать качество работы властей и вынуждает их действовать в интересах граждан. Если в стране отсутствуют независимые СМИ - этого не происходит.',
					videoRanges: ['garantnesvobod_range','freedomdestruction_range','whoownsmedia_range'],
				},{
					id: 'oil',
					route: 'now',
					name: 'Нефтяная игла',
					description: 'Россия долгие годы жила на доходы от экспорта нефти, зарабатывая более 200 млрд долларов в год. Сегодня нефтедоллары составляют 40% федерального бюджета и 50% экспорта, однако в следующие 10 лет ситуация может резко измениться.',
					videoRanges: ['oilfuture_range','electriconly_range','expensieveoil_range', 'shaleoil_range', 'oilextraction_range'],
				}],
			videoRanges:[{
					id: 'vts1',
					from: 771.9,
					to: 1652,
					speaker: 'Сергей Доренко',
					description: 'как создавалась партия "Единая Россия"',
					video: 'dorenkoputin'
				},
				{
					id: 'vts2',
					from: 2019.6,
					to: 2137.5,
					speaker: 'Сергей Доренко',
					description: 'как Березовский уговаривал Путина стать президентом',
					video: 'dorenkoputin'
				},{
					id: 'vts3',
					from: 12,
					to: 88,
					speaker: 'Анна Политковская',
					description: 'как война в Чечне помогла поднять рейтинг Путина',
					video: 'politkovskaya_putin_war'
				},{
					id: 'vts4',
					from: 932.5,
					to: 1001,
					speaker: 'Артем Боровик',
					description: 'война в Чечне как PR ход для президентской кампании Путина',
					video: 'borovic_war_for_pr'
				},{
					id: 'eltsin_first_offer',
					from: 1043.5,
					to: 1108,
					speaker: 'Борис Березовский',
					description: 'кто первый предложил Ельцину кандидатуру Путина',
					video: 'gordon_berezovsky_2012_1'
				},
				{
					id: 'vts5',
					from: 219,
					to: 319.3,
					speaker: 'Борис Березовский',
					description: 'поездка в Биарриц и предложение Путину стать президентом в июле 1999-го года',
					video: 'gordon_berezovsky_2007_2'
				},{
					id: 'vts6',
					from: 1317,
					to: 1518.7,
					speaker: 'Борис Березовский',
					description: 'список кандидатов на роль президента',
					video: 'gordon_berezovsky_2012_1'
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
					description: 'Как выглядят митинги оппозиции в реальности и в новостях кремлевских СМИ',
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
				},{
					id: 'houses_finland_1_range',
					from: 524.8,
					to: 1036.8,
					speaker: 'Илья Варламов',
					description: 'Современное жилье в Финляндии',
					video: 'houses_finland_1'
				},{
					id: 'houses_finland_2_range',
					from: 121,
					to: 1194.2,
					speaker: 'Илья Варламов',
					description: 'Благоустройство новых жилых районов в Финляндии',
					video: 'houses_finland_2'
				},{
					id: 'houses_nz_range',
					from: 368,
					to: 578,
					speaker: 'Илья Варламов',
					description: 'Современное жилье в Новой Зеландии',
					video: 'houses_nz'
				},{
					id: 'publicspace_london_range',
					from: 463,
					to: 1057.5,
					speaker: 'Илья Варламов',
					description: 'Благоустройство жилых районов в Лондоне',
					video: 'publicspace_london'
				},{
					id: 'houses_sweden_range',
					from: 299,
					to: 1434.4,
					speaker: 'Илья Варламов',
					description: 'Современное жилье в Швеции',
					video: 'houses_sweden'
				},{
					id: 'garantnesvobod_range',
					from: 24,
					to: 546.43,
					description: 'Превращение независимых СМИ в подконтрольные Путину',
					video: 'garantnesvobod'
				},{
					id: 'freedomdestruction_range',
					from: 0,
					to: 424.5,
					description: 'Как Путин уничтожил свободу слова в России',
					video: 'freedomdestruction'
				},{
					id: 'whoownsmedia_range',
					from: 3,
					to: 144,
					description: 'Кому принадлежит телевидение в России',
					video: 'whoownsmedia'
				},{
					id: 'oilfuture_range',
					from: 209.8,
					to: 489.3,
					speaker: 'Михаил Крутихин',
					description: 'будущее российской нефтедобычи',
					video: 'oilfuture'
				},{
					id: 'expensieveoil_range',
					from: 882,
					to: 977.5,
					speaker: 'Михаил Крутихин',
					description: 'сколько нефти осталось в России',
					video: 'expensieveoil'
				},{
					id: 'oilextraction_range',
					from: 171,
					to: 291.3,
					speaker: 'Михаил Крутихин',
					description: 'о неэффективной добыче нефти на российских месторождениях',
					video: 'oilextraction'
				},{
					id: 'shaleoil_range',
					from: 14.2,
					to: 426.5,
					speaker: 'Михаил Крутихин',
					description: 'о сланцевой революции и ее влиянии на рынок нефти',
					video: 'shaleoil'
				},{
					id: 'electriconly_range',
					from: 0.7,
					to: 765.5,
					description: 'Планы Европы, Китая и Индии по запрету автомобилей с ДВС',
					video: 'electriconly'
				},{
					id: 'chinaenergy_range',
					from: 0.7,
					to: 765.5,
					description: 'Перспективы развития энергетики Китая',
					video: 'chinaenergy'
				}],
			videos: [{
					id: 'chinaenergy',
					youtubeId: '6mZ-_87MO1A',
					channel: 'neftyanka'
				},{
					id: 'electriconly',
					youtubeId: '1I8eaXNQiR0',
					channel: 'ironcult'
				},
				{
					id: 'shaleoil',
					youtubeId: '62y5PHFEOMY',
					channel: 'neftyanka'
				},{
					id: 'oilextraction',
					youtubeId: 'n1-pF_1O3To',
					channel: 'neftyanka'
				},{
					id: 'expensieveoil',
					youtubeId: 'Zq10NJVDsok',
					channel: 'neftyanka'
				},{
					id: 'oilfuture',
					youtubeId: '50xI50RhLno',
					channel: 'neftyanka'
				},{
					id: 'dorenkoputin',
					youtubeId: 'J1SAtcBCL1o',
					channel: 'nparchive'
				},
				{
					id: 'borovic_war_for_pr',
					youtubeId: 'lGoS0XQ7BHk',
					channel: 'nparchive'
				},{
					id: 'politkovskaya_putin_war',
					youtubeId: '8YwDWd8NqxI',
					channel: 'nparchive'
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
					youtubeId: 'Pq2KzBD5W7c',
					channel: 'ourborisnemtsov'
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
				},{
					id: 'houses_finland_1',
					youtubeId: '5JXZapgIskg',
					channel: 'varlamov'
				},{
					id: 'houses_finland_2',
					youtubeId: 'WLjYhFlCxLw',
					channel: 'varlamov'
				},{
					id: 'houses_nz',
					youtubeId: '77vfr7abBk8',
					channel: 'varlamov'
				},{
					id: 'publicspace_london',
					youtubeId: 'O4MiAcrjCLs',
					channel: 'varlamov'
				},{
					id: 'houses_sweden',
					youtubeId: '6-tbOuWPPhs',
					channel: 'varlamov'
				},{
					id: 'garantnesvobod',
					youtubeId: 'TjLKq3wLGco',
					channel: 'alternative'
				},{
					id: 'freedomdestruction',
					youtubeId: 'aFdIgWs4CqU',
					channel: 'putinregimelies'
				},{
					id: "whoownsmedia", 
					youtubeId: '4TtgIHh5gvU',
					channel: 'forbesrussia'
				}],
			channels: [{
					id: 'ironcult',
					name: 'Iron Cult',
					youtubeId: 'channel/UCXJAF8FATr5KYf9CuymRlYg',
					logoUrl: 'https://yt3.ggpht.com/-tVJ2R197r6o/AAAAAAAAAAI/AAAAAAAAAAA/9-D9yHS2SSU/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
				},{
					id: 'forbesrussia',
					name: 'Forbes Russia',
					youtubeId: 'user/ForbesRussia',
					logoUrl: 'https://yt3.ggpht.com/-ohbXTKWpyFI/AAAAAAAAAAI/AAAAAAAAAAA/aMIdrnP1bq8/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
				},{
					id: 'neftyanka',
					name: 'Нефтянка',
					youtubeId: 'channel/UCMeuQzAnyBR3P9mHHXHcSvw',
					logoUrl: 'https://yt3.ggpht.com/-vIkYMzlYMAU/AAAAAAAAAAI/AAAAAAAAAAA/wkJu5lbQx1E/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
				},{
					id: 'varlamov',
					name: 'varlamov',
					youtubeId: 'channel/UC101o-vQ2iOj9vr00JUlyKw',
					logoUrl: 'https://yt3.ggpht.com/-W5qNN8dXukc/AAAAAAAAAAI/AAAAAAAAAAA/e142ktDj7t8/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
				},{
					id: 'ourborisnemtsov',
					name: 'Наш Борис Немцов',
					youtubeId: 'channel/UCWb3Xr8BtzMIJWE8UNnzMFg',
					logoUrl: 'https://yt3.ggpht.com/-PTEtCBpY55g/AAAAAAAAAAI/AAAAAAAAAAA/WfWvmxCqyJI/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
				},{
					id: 'rtvi',
					name: 'RTVI',
					youtubeId: 'channel/UCPU28A9z_ka_R5dQfecHJlA',
					logoUrl: 'https://yt3.ggpht.com/-CnMwEbuTBrY/AAAAAAAAAAI/AAAAAAAAAAA/RHfN_cYaKEk/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
				},{
					id: 'putinregimelies',
					name: 'Ложь путинского режима',
					youtubeId: 'channel/UCBReV5bfLRI8pFtTrokH7mw',
					logoUrl: 'https://yt3.ggpht.com/-l0nxYVNJeWU/AAAAAAAAAAI/AAAAAAAAAAA/DRX_yR9aOb0/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
				},{
					id: 'alternative',
					name: 'ALTERNATIVE MEDIA',
					youtubeId: 'channel/UCS9DnIddkX6LhV8h4mCuW2Q',
					logoUrl: 'https://yt3.ggpht.com/-TrSfpyquPAM/AAAAAAAAAAI/AAAAAAAAAAA/7GxVqYWCWtY/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
				},{
					id: 'nparchive',
					name: 'Архив сайта newprezident.ru',
					youtubeId: 'channel/UCwEN4wbUR0eM4uVSeBefPoA',
					logoUrl: 'https://yt3.ggpht.com/-BlACVpeFi_A/AAAAAAAAAAI/AAAAAAAAAAg/Ha_Fchz3d3I/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
				},{
					id: 'sotavision',
					name: 'sotavision',
					youtubeId: 'channel/UCk9F6pe9Z2IPxm1VO9lS6NA',
					logoUrl: 'https://yt3.ggpht.com/-4p862zcrijI/AAAAAAAAAAI/AAAAAAAAAAA/a2-CRhE8IH0/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
				},
				{
					id: 'universeofhistory',
					name: 'Вселенная Истории',
					youtubeId: 'channel/UC42ZrgA4ezCWVm8RHnS-xNA',
					logoUrl: 'https://yt3.ggpht.com/-7I0BUCNSPPA/AAAAAAAAAAI/AAAAAAAAAAA/jUT_5vtw6CY/s88-c-k-no-mo-rj-c0xffffff/photo.jpg'
				},{
					id: 'openuniversity',
					name: 'Открытый университет',
					youtubeId: 'channel/UCG1i_bM5A4JMNjBszBOCasw',
					logoUrl: 'https://yt3.ggpht.com/-lutbsJAOAfY/AAAAAAAAAAI/AAAAAAAAAAA/JpMbFk20ls8/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
				},{
					id: 'gordon',
					name: 'В гостях у Гордона',
					youtubeId: 'channel/UCCcprrrcbdaj14kYPjcbj9w',
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