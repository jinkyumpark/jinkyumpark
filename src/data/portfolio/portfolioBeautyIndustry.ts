import Portfolio from "../../model/Portfolio";
import PortfolioStatus from "../../model/PortfolioStatus";
import demo from '../../images/demo/beauty99.png'

const portfolioBeautyIndustry: Portfolio = {
	id: 6,
	status: PortfolioStatus.PLANNED,
	name: {
		korean: '미용업계',
		english: 'Beauty Industry',
		url: 'beauty-industry',
	},
	icon: '',
	link: [],
	thumbnailImage: demo,
	description: {
		short: '미용업계 종사자들을 위한 쉽고 편한 채용 플렛폼',
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
			position: 'Developer (Front, Back)',
		},
		{
			name: '승현',
			url: '',
			position: 'Desinger',
		},
	],
    
	db: {
		images: [],
		explanations: [],
	},

	explanations: [
		
	]
}

export default portfolioBeautyIndustry