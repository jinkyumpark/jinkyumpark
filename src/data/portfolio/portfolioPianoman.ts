import Portfolio from "../../model/Portfolio";
import PortfolioStatus from "../../model/PortfolioStatus";
import WebsiteIcon from "../websiteIcon";

import demo from '../../images/demo/pianoman.jpeg'
import icon from '../../images/icons/pianoman.png'

const portfolioPianoman: Portfolio = {
	id: 5,
	status: PortfolioStatus.PRODUCTION,
	name: {
		korean: '피아노맨',
		english: 'Pianoman',
		url: 'piano-man',
	},
	icon: icon,
	link: [
		{
			link: 'https://apps.apple.com/us/app/pianoman/id6456449788',
			icon: WebsiteIcon.appleAppstore,
			border: false,
		},
		{
			link: 'https://github.com/jinkyumpark/piano-man',
			icon: WebsiteIcon.github,
			border: false,
		},
	],
	thumbnailImage: demo,
	detailImage: demo,
	description: {
		short: '음악하는 모든 분을 위한, 단 1개의 앱.',
		medium: `내 연습 기록부터, 메트로놈, 녹음까지.<br/>\음악하면서 필요한 여러 기능을 1개의 앱에서 누려 보세요.`,
		long: '내 연습 기록부터, 메트로놈, 녹음까지.<br/>\음악하면서 필요한 여러 기능을 1개의 앱에서 누려 보세요.',
	},
	features: [],
	demoImages: [],
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

	explanations: [
		
	]
}

export default portfolioPianoman