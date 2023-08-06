// // Demo Images
// import simplyJournal from '../images/portfolio/simply-journal.png'
// import springfeed from '../images/portfolio/springfeed.png'
// import bookItOut from '../images/portfolio/booksitout.png'
// import substrack from '../images/portfolio/substrack.png'
// import beauty from '../images/portfolio/beauty-industry.png'
// import everyoneGarden from '../images/portfolio/everyone-garden.png'

// import springfeedErDiagram from '../images/portfolio/er-diagram/springfeed-er.png'
// // URL Data
// import { portfolioUrl } from './url'

// // secondary 시작전
// // danger 진행중
// // success 완료
// // warning 업데이트중

// export const portfolios = [
// 	{
// 		id: 3,
// 		name: '책잇아웃',
// 		title: '챗잇아웃',
// 		subtitle: '책벌래들의 독서생활을 더 편리하게',
// 		introduction: `
// 		실제 출시를 목표로 개발중인 B2C 독서 플렛폼.
// 		책을 읽으면서 느끼는 다양한 Pain Point를 해결하려 시도했습니다.
//         `,
// 		participants: 1,
// 		image: bookItOut,
// 		status: {
// 			style: 'danger',
// 			name: '진행중',
// 		},

// 		primaryFeatures: [
// 			'내 독서활동을 한 눈에 보여주는 통계',
// 			'도서관, 서점, 중고서점 등 책을 파는 모든 곳에서 내가 읽고 싶은 책 한 번에 검색!',
// 			'내 독서활동 측정하고, 인용/메모를 한 곳에서 관리',
// 		],
// 		difficulties: [],

// 		url: `/${portfolioUrl}/booksitout`,
// 		githubLink: 'https://github.com/jinkyumpark/booksitout',
// 		siteLink: 'https://booksitout.com',

// 		technologiesUsed: [1, 2, 3, 4, 5, 6, 7, 8],

// 		db: {},

// 		challenges: [],
// 	},
// 	{
// 		id: 4,
// 		name: '구독 돌보미',
// 		title: '구독 돌보미',
// 		subtitle: '구독을 편하게 관리할 수 있게 하는 iPhone 앱',
// 		introduction: `
// 		내가 구독하고 있는 서비스들을 간단하게 등록해 관리.
// 		다양한 구독 서비스들을 새롭게 탐색.
//         `,
// 		participants: 1,
// 		image: substrack,
// 		status: {
// 			style: 'danger',
// 			name: '진행중',
// 		},

// 		primaryFeatures: [
// 			'내가 구독하고 있는 서비스들을 등록하고 D-Day, 이번달 내야 하는 금액 등을 관리',
// 			'다양한 분야의 새로운 구독 서비스들을 잘 정리된 UI로 편하게 탐색'
// 		],
		
// 		url: `/${portfolioUrl}/substrack`,
// 		githubLink: 'https://github.com/jinkyumpark/substrack',
// 		siteLink: 'https://apps.apple.com/',
		
// 		difficulties: [],
// 		technologiesUsed: [14],
// 		db: {},
// 		challenges: [],
// 	},
// 	{
// 		id: 5,
// 		name: '미용업계',
// 		title: '미용업계',
// 		subtitle: '미용업계 종사자들을 위한 채용 플렛폼',
// 		introduction: `
// 		이직이 잦은 미용업계 특성을 고려해서
// 		더 편한 UI/UX를 제공하는 미용업계 전문 채용 플렛폼
//         `,
// 		participants: 2,
// 		image: beauty,
// 		status: {
// 			style: 'danger',
// 			name: '진행중',
// 		},

// 		primaryFeatures: [
// 			'채용 공고 등록/관리',
// 			'이력서 등록 / 연락 받기'
// 		],
// 		difficulties: [],

// 		url: `/${portfolioUrl}/beauty`,
// 		githubLink: 'https://github.com/jinkyumpark/substrack',
// 		siteLink: '',
// 		technologiesUsed: [],
// 		db: {},
// 		challenges: [],
// 	},
// 	{
// 		id: 6,
// 		name: '모두의 텃밭',
// 		title: '모두의 텃밭',
// 		subtitle: '농업 농진대회 출품, 전국 각지의 텃밭을 1곳에 모아보기',
// 		introduction: `
// 		내가 소설은 몇 권 읽었을까? 작년에 하루 평균 몇 분 정도 책을 읽었지?
// 		독서를 좋아하는 책벌래라면 누구나 궁금한 질문
//         `,
// 		participants: 5,
// 		image: everyoneGarden,
// 		status: {
// 			style: 'danger',
// 			name: '진행중',
// 		},

// 		primaryFeatures: [
// 			'지도의 확대 범위에 따라 마커 / 구체적인 점으로 표시되는 텃밭 위치',
// 			'내 텃밭을 올리고 관리'
// 		],
// 		difficulties: [
// 			'전체적으로 커뮤니케이션에 대해 많이 배웠습니다.'
// 		],

// 		url: `/${portfolioUrl}/everyone-garden`,
// 		githubLink: 'https://github.com/everyone-s-garden/everyone-garden-back',
// 		siteLink: 'https://everyonesgarden.vercel.app/',
// 		technologiesUsed: [],
// 		db: {},
// 		challenges: [],
// 	},
// 	{
// 		id: 1,
// 		name: 'springfeed',
// 		title: 'Springfeed',
// 		subtitle: '국비지원학원 프로젝트, 인스타그램을 참고한 SNS',
// 		introduction: `
//         국비지원학원에서 조별로 진행한 프로젝트입니다.<br/><br/>
//         일정에 맞춰 개발해 보면서 처음 요구사항 분석이나 API 명세서를 잘 작성하는 것의 중요성에 대해 느꼈고,
//         다른 분이 만든 코드를 수정하면서 단순히 동작하기만 하는 코드가 아닌 읽기 쉬운 코드의 중요성을 체감했습니다.</br><br/>
//         또, 개발 도구 자동화나 CI/CD가 생산성에 미치는 영향을 보면서 DevOps 직군에 대한 관심이 생겼습니다.
//         `,
// 		participants: 3,
// 		image: springfeed,
// 		status: {
// 			style: 'warning',
// 			name: '업데이트중',
// 		},

// 		primaryFeatures: [
// 			'게시글, 스토리(시간이 지나면 사라지는 게시글), 댓글 CRUD',
// 			'다른 유저 팔로우해 게시글 열람, 메세징',
// 			'다른 유저가 내 게시글, 스토리에 좋아요 누르면 알림',
// 			'인기 게시글 열람',
// 		],
// 		difficulties: [
// 			`<h5>설계</h5>

//             처음 계획에서 도메인을 나눌때 겹치는 부분이나 공통된 코드가 있었는데 눈치채지 못 했다.
//             <br/><br/>
//             이를 interface로 빼거나, dependency를 분리하지 않아서 반복된 작업을 많이 했고, 유지보수도 힘들었다`,

// 			`<h5>소통</h5>

//             처음에는 설계 단계에서 겹치는 부분을 눈치채지 못 해도 소통을 긴밀하게 했으면 괜찮았을텐데 바쁜 일정을 핑계로 내 할 일만 집중했었다. 
//             <br/><br/>
//             나중에는 이를 깨닫고 서로 지금 하고 있는 일을 공유하고, <b>내 할 일</b> / <b>다른 사람 할 일</b> 구분 없이 같이 서비스를 만들어 간다는 마음으로 도움을 주고 받았다.`,
// 		],

// 		url: `/${portfolioUrl}/springfeed`,
// 		githubLink: 'https://github.com/kxmjxnjoo/springfeed',
// 		siteLink: 'https://springfeed.jinkyumpark.com',

// 		technologiesUsed: [2, 3, 6, 8],

// 		db: {
// 			erDiagram: springfeedErDiagram,
// 			used: [60],
// 			query: '',
// 		},

// 		challenges: [],
// 	},
// ]

// /* 	{
// 		id: 2,
// 		name: 'simply-journal',
// 		title: 'Simply Journal',
// 		subtitle: '매일 간단하게 한 줄씩이라도, 일기로 추억하게',
// 		introduction: `
//         우연히 옛날 일기를 발견해 읽었는데, 너무 즐거워 일기를 쓰기로 했습니다. 
//         하지만 의외로 마땅한 서비스가 없어 직접 만들었습니다.
//         `,
// 		participants: 1,
// 		image: simplyJournal,
// 		status: {
// 			style: 'danger',
// 			name: '진행중',
// 		},

// 		primaryFeatures: [
// 			'일기 작성/수정/삭제',
// 			'기간별로 일기 조회, 키워드로 일기 검색',
// 			'카카오/네이버로 로그인',
// 			'공유를 허용한 내 일기를 공유',
// 			'다른 사람을 팔로우해서 서로 일기 공유',
// 		],
// 		difficulties: [],

// 		url: `/${portfolioUrl}/simply-journal`,
// 		githubLink: 'https://github.com/jinkyumpark/simply-journal',
// 		siteLink: 'https://journal.jinkyumpark.com',

// 		technologiesUsed: [1, 2, 3, 4, 5, 6, 7, 8],

// 		db: {
// 			erDiagram: null,
// 			used: [61, 63],
// 			query: '',
// 		},

// 		challenges: [],
// 	}, */