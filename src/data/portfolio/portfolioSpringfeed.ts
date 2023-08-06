import Portfolio from "../../model/Portfolio";
import PortfolioStatus from "../../model/PortfolioStatus";
import WebsiteIcon from "../websiteIcon";
import demo from '../../images/demo/springfeed.jpeg'

const portfolioSpringfeed: Portfolio = {
	id: 10,
	status: PortfolioStatus.GIVE_UP,
	name: {
		korean: '스프링 피드',
		english: 'Springfeed',
		url: "springfeed"
	},
	icon: '',
	thumbnailImage: demo,
	link: [
		{
			link: `https://github.com/kxmjxnjoo/springfeed`,
			icon: WebsiteIcon.github,
			border: false,
		},
	],

	description: {
		short: `국비지원학원 프로젝트, 인스타그램을 참고한 SNS`,
		medium: ``,
		long: `
            국비지원학원에서 조별로 진행한 프로젝트입니다.<br/><br/>
            일정에 맞춰 개발해 보면서 처음 요구사항 분석이나 API 명세서를 잘 작성하는 것의 중요성에 대해 느꼈고,
            다른 분이 만든 코드를 수정하면서 단순히 동작하기만 하는 코드가 아닌 읽기 쉬운 코드의 중요성을 체감했습니다.</br><br/>
            또, 개발 도구 자동화나 CI/CD가 생산성에 미치는 영향을 보면서 DevOps 직군에 대한 관심이 생겼습니다.
        `,
	},

	features: [
		'게시글, 스토리(시간이 지나면 사라지는 게시글), 댓글 CRUD',
		'다른 유저 팔로우해 게시글 열람, 메세징',
		'다른 유저가 내 게시글, 스토리에 좋아요 누르면 알림',
		'인기 게시글 열람',
	],

	demoImages: [],

	technologyUsed: ['java', 'spring', 'oracledb', 'jsp'],

	challenges: [
		`<h5>설계</h5>

        처음 계획에서 도메인을 나눌때 겹치는 부분이나 공통된 코드가 있었는데 눈치채지 못 했다.
        <br/><br/>
        이를 interface로 빼거나, dependency를 분리하지 않아서 반복된 작업을 많이 했고, 유지보수도 힘들었다`,

		`<h5>소통</h5>

        처음에는 설계 단계에서 겹치는 부분을 눈치채지 못 해도 소통을 긴밀하게 했으면 괜찮았을텐데 바쁜 일정을 핑계로 내 할 일만 집중했었다. 
        <br/><br/>
        나중에는 이를 깨닫고 서로 지금 하고 있는 일을 공유하고, <b>내 할 일</b> / <b>다른 사람 할 일</b> 구분 없이 같이 서비스를 만들어 간다는 마음으로 도움을 주고 받았다.
        `,
	],

	participants: [
		{
			name: '박진겸',
			url: 'https://github.com/jinkyumpark',
			position: 'Backend Developer',
		},
		{
			name: '표세인',
			url: 'https://github.com/seinpyo',
			position: 'Backend Developer',
		},
		{
			name: '김진주',
			url: 'https://github.com/kxmjxnjoo',
			position: 'Backend Developer',
		},
	],
}

export default portfolioSpringfeed