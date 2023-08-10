import Portfolio from "../../model/Portfolio";
import PortfolioStatus from "../../model/PortfolioStatus";

import icon from '../../images/icons/purrfitTracker.png'
import demo from '../../images/demo/purrfittracker.jpeg'

const portfolioPurrfitTracker: Portfolio = {
	id: 12,
	status: PortfolioStatus.STARTED,
	name: {
		korean: '수입 관리냥',
		english: 'Purrfit Tracker',
		url: 'purrfit-trackerr',
	},
	icon: icon,
	link: [],
	thumbnailImage: demo,
	description: {
		short: '다양한 곳에서 들어오는 내 수입, 고양이가 관리',
		medium: ``,
		long: ``,
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
		explanations: []
	},

	explanations: [
		
	]
}

export default portfolioPurrfitTracker