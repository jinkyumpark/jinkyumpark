import Portfolio from "../../model/Portfolio";
import PortfolioStatus from "../../model/PortfolioStatus";
import WebsiteIcon from "../websiteIcon";

import thumbnailImage from '../../images/demo/everyonesgarden.jpeg'

const portfolioEveryonesGarden: Portfolio = {
	id: 0,
	status: PortfolioStatus.RELEASED,

	name: {
		korean: '모두의 텃밭',
		english: `Everyone's Garden`,
		url: "everyones-garden"
	},

	icon: 'https://avatars.githubusercontent.com/u/130581559?s=200&v=4',
	thumbnailImage: thumbnailImage,
	link: [
		{
			link: `https://everyonesgarden.vercel.app/`,
			icon: `https://avatars.githubusercontent.com/u/130581559?s=200&v=4`,
			border: true,
		},
		{
			link: `https://github.com/everyone-s-garden/everyone-garden-back`,
			icon: WebsiteIcon.github,
			border: false,
		},
	],

	description: {
		short: `농업 농진대회 수상, 전국 각지의 텃밭을 1곳에 모아보기`,
		medium: ``,
		long: ``,
	},

	features: [
		'지도상에서 분양중인 공공/민간 텃밭 모아 보기',
		'내 텃밭 등록하고 관리하기',
		'월별 키우면 좋을 작물 추천받기',
	],
	demoImages: [],
	technologyUsed: ['java', 'spring', 'springsecurity', 'jpa', 'mysql'],
	challenges: [],

	participants: [
		{
			name: '박진겸',
			url: `https://github.com/jinkyumpark`,
			position: `Backend Developer`,
		},
		{
			name: '김별',
			url: `https://github.com/jinkyumpark`,
			position: `Backend Developer`,
		},
		{
			name: '승현',
			url: `https://github.com/jinkyumpark`,
			position: `Designer`,
		},
		{
			name: '임이라',
			url: `https://github.com/jinkyumpark`,
			position: `Frontend Developer`,
		},
		{
			name: '승현',
			url: `https://github.com/jinkyumpark`,
			position: `Frontend Developer`,
		},
	],

	db: {
		images: [],
		explanations: []
	},

	explanations: [
		
	]
}

export default portfolioEveryonesGarden