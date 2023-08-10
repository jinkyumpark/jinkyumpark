import Portfolio from "../../model/Portfolio";
import PortfolioStatus from "../../model/PortfolioStatus";
import WebsiteIcon from "../websiteIcon";
import demo from '../../images/demo/simplyjournal.jpeg'

const portfolioSimplyJournal: Portfolio = {
	id: 9,
	status: PortfolioStatus.GIVE_UP,
	name: {
		korean: `간편일기`,
		english: `Simply Journal`,
		url: "simply-journal"
	},
	icon: '',
	thumbnailImage: demo,
	link: [
		{
			link: `https://github.com/jinkyumpark/simply-journal`,
			icon: WebsiteIcon.github,
			border: false,
		},
		{
			link: `http://simply-journal.jinkyumpark.com/`,
			icon: WebsiteIcon.link,
			border: false,
		},
	],
	description: {
		short: `매일 간단하게 한 줄씩이라도, 일기로 추억하게`,
		medium: ``,
		long: `
        우연히 옛날 일기를 발견해 읽었는데, 너무 즐거워 일기를 쓰기로 했습니다. 
        하지만 의외로 마땅한 서비스가 없어 직접 만들었습니다.
    `,
	},
	features: [
		'일기 작성/수정/삭제',
		'기간별로 일기 조회, 키워드로 일기 검색',
		'카카오/네이버로 로그인',
		'공유를 허용한 내 일기를 공유',
		'다른 사람을 팔로우해서 서로 일기 공유',
	],
	demoImages: [],
	technologyUsed: [],
	challenges: [],
	participants: [
		{
			name: '박진겸',
			url: 'https://github.com/jinkyumpark',
			position: 'Developer'
		}
	],

	db: {
		images: [],
		explanations: [],
	},

	explanations: [
		
	]
}

export default portfolioSimplyJournal