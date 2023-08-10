import Portfolio from "../../model/Portfolio"
import PortfolioStatus from "../../model/PortfolioStatus"

import icon from '../../images/icons/boldPeople.png'
import demo from '../../images/demo/boldPoeple.jpeg'

const portfolioBoldPeople: Portfolio = {
	id: 5,
	status: PortfolioStatus.STARTED,
	name: {
		korean: '대담인',
		english: 'Bold People',
		url: 'bold-people',
	},
	icon: icon,
	link: [],
	thumbnailImage: demo,
	description: {
		short: '학교 인증 기반 커뮤니티',
		medium: '대담인(대학생 담소 인증)은 학교 Email로 학교를 인증해서 대학생들이 학교를 넘어 정보를 공유할 수 있는 커뮤니티입니다',
		long: '',
	},
	features: [],
	demoImages: [],
	technologyUsed: [],
	challenges: [],
	participants: [
		{
			name: '',
			url: '',
			position: '',
		},
		{
			name: '',
			url: '',
			position: '',
		},
	],
	db: {
		images: [],
		explanations: [],
	},

	explanations: [
		
	]
}

export default portfolioBoldPeople