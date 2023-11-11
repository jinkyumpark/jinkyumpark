import Portfolio from "../../model/Portfolio";
import PortfolioStatus from "../../model/PortfolioStatus";

import icon from '../../images/icons/purrfitTracker.png'
import demo from '../../images/demo/purrfittracker.jpeg'
import WebsiteIcon from "../websiteIcon";

const portfolioPurrfitTracker: Portfolio = {
	id: 12,
	status: PortfolioStatus.PRODUCTION,
	name: {
		korean: '수입 관리냥',
		english: 'Purrfit Tracker',
		url: 'purrfit-tracker',
	},
	icon: icon,
	link: [
		{
			link: 'https://apps.apple.com/app/purrfit-tracker/id6458539987',
			icon: WebsiteIcon.appleAppstore,
			border: false,
		},
		{
			link: 'https://github.com/jinkyumpark/purrfit-tracker',
			icon: WebsiteIcon.github,
			border: false,
		},
	],
	
	thumbnailImage: demo,
	demoImages: [demo],

	description: {
		short: '내 수입, 쉽게 관리하기',
		medium: `
		다양한 곳에서 들어오는 내 수입을 관리하고 기록하고 싶으세요?
		<br/>
		수입을 쉽게 기록하고 통계도 제공받아 보세요!
		`,
		long: `
			"월급만으론 부족하다!"
			<br/>
			다양한 곳에서 들어오는 내 수입들을 편하게 관리하면 좋지 않을까요?
			<br/>
			수입처들을 등록하고 수입을 추가하면 내 수입들을 한 눈에 볼 수 있어요.
			<br/>
			뿐만 아니라 내 수입들을 분석해서 통계로 보여줘요.
			<br/>
			<br/>
			수입 관리냥으로 다양한 곳에서 오는 수입들을 편하게 관리해 보세요!
		`,
	},
	features: [
		'내 수입처와 그 수입처에 해당하는 수입을 등록',
		'등록된 수입을 바탕으로 통계 제공',
		'(예정) 내 수입 데이터 iCloud에 안전하게 저장',
		'(예정) 여러 수입 관련 얘기들 다양한 사람들과 나누기',
	],
	technologyUsed: [
		'swift',
		'swiftui',
		'swiftdata',
		'swiftcharts',
		'xcodecloud',

	],
	challenges: [
		'SwiftUI의 간헐적인 버그들을 우회하는 것이 어려웠습니다. SwiftUI가 아무래도 Apple의 철학대로 있는걸 잘 가져다 쓰라고 하다 보니 Customize가 어려웠습니다.',
		'Swift Data를 처음 써 봤고, 또 최신 iOS인 16에서만 동작하다 보니 자료가 많지 않아서 공부하는데 어려움이 있었습니다.',
	],
	participants: [
		{
			name: '박진겸',
			url: 'https://github.com/jinkyumpark',
			position: 'Developer',
		},
	],

	db: {
		images: [],
		explanations: [
			'수입처와 수입이 Many to One인 단순한 구조입니다.',
			'통계 처리를 위해 caching을 어디까지 해야 하나 고민이 많았습니다. (결국 일단은 하지 않기로 했습니다)'
		],
	},

	explanations: [
		'SwiftUI와 Swift Data를 사용해 단순 CRUD 기능 + CRUD 된 데이터를 바탕으로 통계 처리를 했습니다. (처리된 통계 보여주는건 Swift Charts 사용)',
		'데이터를 보지는 않았지만, 개인적으로 느끼기에 PMF가 있지 않을까 해서 고도화를 위해 확장성을 고려해서 개발했습니다.'
	],
}

export default portfolioPurrfitTracker