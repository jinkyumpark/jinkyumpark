import Portfolio from "../../model/Portfolio";
import PortfolioStatus from "../../model/PortfolioStatus";
import WebsiteIcon from "../websiteIcon";

import demo from '../../images/demo/pianoman.jpeg'
import icon from '../../images/icons/pianoman.png'

const portfolioPianoman: Portfolio = {
	id: 5,
	status: PortfolioStatus.GIVE_UP,
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
		short: '내 악기 연습을 기록할 수 있는 iOS 앱',
		medium: '',
		long: '',
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