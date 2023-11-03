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
	],
	technologyUsed: [],
	challenges: [],
	participants: [
		{
			name: '박진겸',
			url: 'https://github.com/jinkyumpark',
			position: 'Developer',
		},
	],

	db: {
		images: [],
		explanations: [],
	},

	explanations: [],
}

export default portfolioPurrfitTracker