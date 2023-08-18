import Portfolio from "../../model/Portfolio";
import PortfolioStatus from "../../model/PortfolioStatus";
import WebsiteIcon from "../websiteIcon";

import thumbnailImage from '../../images/demo/everyonesgarden.jpeg'
import demo2 from '../../images/demo/everyonesgarden-v2.png'
import erd from '../../images/erd/everyonesgarden-erd.png'

const portfolioEveryonesGarden: Portfolio = {
	id: 0,
	status: PortfolioStatus.RELEASED,

	name: {
		korean: '모두의 텃밭',
		english: `Everyone's Garden`,
		url: 'everyones-garden',
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
		long: `
			Back 개발자 2명, Front 개발자 2명, Design 1명과 진행한 농업 경진대회 출품작입니다.
			기술적인 도전을 크게 없었지만 협업을 하는 풍부함 경험을 하게 해 주었습니다.
		`,
	},

	features: ['지도상에서 분양중인 공공/민간 텃밭 모아 보기', '내 텃밭 등록하고 관리하기', '월별 키우면 좋을 작물 추천받기'],
	demoImages: [demo2],
	technologyUsed: ['java', 'spring', 'springsecurity', 'jpa', 'mysql'],
	challenges: [
		'보통 혼자서 프로젝트를 진행하는 경우가 많아 5명이나 되는 분들과 협력하면서 많은걸 느꼈습니다.'
	],

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
		images: [erd],
		explanations: [],
	},

	explanations: [
		'Spring Security를 이용한 OAuth2 로그인 기능 구현',
		'현재 위치 기준으로 공공 및 민간 분양 목록 제공',
		'Spring Batch를 이용한 공공 텃밭 DB 구축',
		'허위 매물에 대한 신고 기능 제공하여 신고 누적 점수가 넘어갈 시 soft delete를 이용하여 게시글 목록에서 제외',
		'공공 API를 이용한 월별 추천 작물 정보 제공',
	],
}

export default portfolioEveryonesGarden