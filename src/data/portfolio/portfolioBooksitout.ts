import Portfolio from "../../model/Portfolio";
import PortfolioStatus from "../../model/PortfolioStatus";
import WebsiteIcon from "../websiteIcon";
import booksitout from '../../images/demo/booksitout.jpeg'

const portfolioBooksitout: Portfolio = {
	id: 1,
	status: PortfolioStatus.RELEASED,
	name: {
		korean: '책잇아웃',
		english: 'booksitout',
		url: 'booksitout',
	},
	icon: 'https://github.com/jinkyumpark/booksitout/assets/61900235/081f7b4c-f107-4945-a5f1-f298aa0c0cc7',
	link: [
		{
			link: 'https://booksitout.com',
			icon: WebsiteIcon.booksitout,
			border: false,
		},
		{
			link: 'https://github.com/jinkyumpark/booksitout',
			icon: WebsiteIcon.github,
			border: false,
		},
	],
	description: {
		short: `책벌레들의 독서생활을 조금 더 편하게`,
		medium: `
			실제 출시를 목표로 개발중인 B2C 독서 플렛폼. 
			독서가 취미라 다양한 Pain Point이 보여 이를 해결하려 했습니다.`,
		long: `

		`,
	},
	features: [
		'내 책을 등록하고 독서활동을 기록 / 관리',
		'내 책과 독서활동에 대한 통계 제공',
		'도서관, 중고서점, 구독 등 다양한 곳에서 1번에 책 검색',
		'내 근처의 도서관을 쉽게 찾아보고 도서관 회원증을 관리',
		'내 독서 기록을 공유하고 얘기를 나눌 수 있는 커뮤니티',
	],
	demoImages: [],
	technologyUsed: ['java', 'kotlin', 'spring', 'springsecurity', 'springcloud', 'gradle', 'react', 'bootstrap', 'redux', 'python'],
	challenges: [],
	participants: [
		{
			name: '박진겸',
			url: 'https://github.com/jinkyumpark',
			position: 'Frontend, Backend, Desinger, PO',
		},
	],
	thumbnailImage: booksitout,
}

export default portfolioBooksitout