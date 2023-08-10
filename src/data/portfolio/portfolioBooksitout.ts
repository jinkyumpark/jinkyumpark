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
	challenges: [
		`
			거의 반년동안 계속적으로 프로젝트를 진행하면서 초반에 짠 코드들이 후반에 가서는 기술적 부채처럼 느껴졌고, 
			기존 코드를 수정하거나 새로운 기능을 추가할 때 점점 시간과 노력이 많이 들게 되었습니다.

			이에 Front 쪽에서는 TS, Styled-Components 같은 코드 복잡도를 줄이는 기술을 도입하고, Component를 분리해 관심사를 명확히 했습니다.

			Back에서는 MSA를 도입하고, 생산성이 떨어지는 요소를 개선하기 위해 (Null Safety, 배포 등) Kotlin을 도입하고, 
			Github Actions를 통해 CI/CD를 작성해 반복되는 작업들을 자동화했습니다.
		`,

		`
			혼자서 큰 서비스를 개발하려다 보니, 디자인/기획/마케팅을 모두 직접 해야 해서 전문성이 떨어진다고 많이 느꼈습니다.
		`
	],
	participants: [
		{
			name: '박진겸',
			url: 'https://github.com/jinkyumpark',
			position: 'Frontend, Backend, Desinger, PO',
		},
	],
	thumbnailImage: booksitout,

	db: {
		images: ['https://user-images.githubusercontent.com/61900235/238193432-0e162c56-8b14-44b2-a498-ffb9c254b451.png'],
		explanations: [
			`MSA로 구성을 변경하면서 JOIN을 할 수 없게 되어 비정규화를 진행했습니다.`,
			`약 50만건의 책 데이터를 적재하면서 MySQL의 Architecture에 대한 이해를 바탕으로 SQL을 최적화한 경험이 있습니다.`,
		]
	},

	explanations: [
		`Spring Cloud 기반 8개로 구성된 MSA 구축, AWS에 Docker로 Github Actions를 사용해 CI/CD로 배포, SQS로 비동기 통신`,
		`Spring Batch를 사용한 약 50만건의 자체 책 DB 구축, SQL 최적화, 데이터 정규화 작업`,
		`Open API, Web Crawling, 자체 DB 구축을 통한 도서관, 구독, 전자도서관, 중고책에서 1번에 책 검색`,
		`규모별 확장성을 고려해 설계한 인기 게시글 Hot Ranking Algorithm`,
		`현재 위치를 기준으로 주변 도서관 탐색 (위도/경도 기준으로 거리 계산, 특정 위도/경도 범위 내에서는 동일 cache 사용)`,
		`Naver Clover OCR을 활용해 도서관 회원증을 AI로 인식해 자동 추가`,
		`커뮤니티 활동, 유저의 설정을 기반으로 알림 전송 (AWS SQS, AWS SES 사용)`,
	]
}

export default portfolioBooksitout