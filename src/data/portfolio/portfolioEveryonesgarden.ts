import Portfolio from "../../model/Portfolio";
import PortfolioStatus from "../../model/PortfolioStatus";
import WebsiteIcon from "../websiteIcon";

import thumbnailImage from '../../images/demo/everyonesgarden.jpeg'
import demo2 from '../../images/demo/everyonesgarden-v2.png'
import erd from '../../images/erd/everyonesgarden-erd.png'
import TechnologyData from "../TechnologyData";

const portfolioEveryonesGarden: Portfolio = {
	id: 0,
	status: PortfolioStatus.GIVE_UP,

	name: {
		korean: '모두의 텃밭',
		english: `Everyone's Garden`,
		url: 'everyones-garden',
	},

	icon: 'https://avatars.githubusercontent.com/u/130581559?s=200&v=4',
	thumbnailImage: thumbnailImage,
	detailImage: demo2,
	link: [
		{
			link: `https://everyones-garden.com`,
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
			Back 개발자 2명, Front 개발자 2명, Design 1명과 진행한 농립축산부 농업 경진대회 우수상 수상작입니다.
			<br/>
			<br/>
			기술적인 도전을 없었지만 협업을 하는 과정에서 좋은 문화의 전파와 갈등을 대처하고, 효율적으로 일하는 방법을 배웠습니다.
			또, 좋은 개발자가 무엇인지 효율적으로 일하기 위해서는 어떻게 하는게 좋은지 고민했습니다.
		`,
	},

	features: ['지도상에서 분양중인 공공/민간 텃밭 모아 보기', '내 텃밭 등록하고 관리하기', '월별 키우면 좋을 작물 추천받기'],
	demoImages: [demo2],
	technologyUsed: [
		TechnologyData.java,
		TechnologyData.spring,
		TechnologyData.springSecurity,
		TechnologyData.jpa,
		TechnologyData.mysql,
	],
	challenges: [
		'보통 혼자서 프로젝트를 진행하는 경우가 많아 5명이나 되는 분들과 협력하면서 많은 비효율이나 갈등이 있었는데, 메이커뿐만 아니라 매니저나 문화의 중요성을 느꼈습니다.',
		'공공기관에 내는 프로젝트다 보니 여러 비합리적인 절차를 따라야 했습니다. (불필요한 Open API 사용, 쓸데없는 발표를 위한 이동 등)',
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