import Portfolio from "../../../model/Portfolio";
import PortfolioStatus from "../../../model/PortfolioStatus";

import icon from '../../../images/icons/purrfitTracker.png'
import demo from '../../../images/demo/purrfittracker.jpeg'
import WebsiteIcon from "../../websiteIcon";

const purrfitTrackerEnglish: Portfolio = {
	id: 12,
	status: PortfolioStatus.PRODUCTION,
	name: {
		korean: 'Purrfit Tracker',
		english: '',
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
		short: 'Income, now fully managed',
		medium: `
		다양한 곳에서 들어오는 내 수입을 관리하고 기록하고 싶으세요?
		<br/>
		수입을 쉽게 기록하고 통계도 제공받아 보세요!
		`,
		long: `
		Are you earning income from various sources?
		<br/>
		If so, you can benefit from <b>Purrfit Cat</b>.
		<br/>
		Register your income and its sources to manage and view statistics.
		<br/>
	`,
	},
	features: ['Register Income and Income Sources', 'View Statistics'],
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

export default purrfitTrackerEnglish