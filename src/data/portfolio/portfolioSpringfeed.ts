import Portfolio from "../../model/Portfolio";
import PortfolioStatus from "../../model/PortfolioStatus";
import WebsiteIcon from "../websiteIcon";
import demo from '../../images/demo/springfeed.jpeg'
import erd from '../../images/erd/springfeed-er.png'
import TechnologyData from "../TechnologyData";

const portfolioSpringfeed: Portfolio = {
    id: 10,
    status: PortfolioStatus.GIVE_UP,
    name: {
        korean: '스프링 피드',
        english: 'Springfeed',
        url: "springfeed"
    },
    icon: WebsiteIcon.springfeed,
    thumbnailImage: demo,
    detailImage: demo,
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

    technologyUsed: [
        TechnologyData.java,
        TechnologyData.spring,
        TechnologyData.oracleDb,
    ],

    challenges: [
        `<h5>설계</h5>
        처음 계획에서 도메인을 나눌때 겹치는 부분이나 공통된 코드가 있었는데 눈치채지 못 했다.
        이를 interface로 빼거나, dependency를 분리하지 않아서 반복된 작업을 많이 했고, 유지보수도 힘들었다
		`,

        `<h5>소통</h5>
        처음에는 설계 단계에서 겹치는 부분을 눈치채지 못 해도 소통을 긴밀하게 했으면 괜찮았을텐데 바쁜 일정을 핑계로 내 할 일만 집중했었다. 
        나중에는 이를 깨닫고 서로 지금 하고 있는 일을 공유하고, <b>내 할 일</b> / <b>다른 사람 할 일</b> 구분 없이 같이 서비스를 만들어 간다는 마음으로 도움을 주고 받았다.
        `,
        `<h5>독단</h5>
		총 4명의 팀원 중, 1분은 나가셨고 1분은 HTML/CSS도 잘 못 하셔서 거의 2명이서 프로젝트를 해야 했다. 
		그래서 어쩌다 역할분담이 내가 Front를 거의 하고, 추가로 백엔드도 많은 부분 하게 됐다.
		욕심이 앞서 React를 도입해 보고 싶어 상의도 없이 혼자서 도입했는데 (폐급...?), 나중에 이것 때문에 Front는 나 혼자서만 수정이 가능했고, Backend 구조들도 많이 바꿔야 해서 시간이 많이 지체됐다.		
		변명을 하자면 그때 JSP를 사용하는게 너무 고통스러워서 그랬는데 일정을 고려하지 않고, 무엇보다 팀원과 상의도 없이 도입한 것은 전적으로 나의 잘못이여서 많이 반성했다.
		`
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

    db: {
        images: [erd],
        explanations: [
            'DB에 대한 이해도 부족하고, 좋은  Practice를 학원에서 배우지도 못해 절대 좋은 DB 설계라고 말할 수는 없습니다.',
            '또, PL/SQL을 썼기 때문에 DB내에서 모든 Business Logic을 처리하고, MyBatis로 단순 CRUD만 Application Level에서 처리하는 기이한 구조로 되어 있습니다.',
        ],
    },

    explanations: [
        `
			프로그래밍 인생에서 처음으로 했던 팀프로젝트였습니다. 혼자서 코딩할 때랑 다르게 고려할 것도 많았고, Git이나 Conding Convention 같은 것도 처음 써 봐서 정말 많은 것을 배웠습니다. 처음 협업이라 서로 서툰 것도 많고, 결국 끝까지 마치지도 못 해서 아쉬움이 남습니다. 
			하지만, 이 프로젝트를 통해 협업의 중요성을 알게 되었고, 협업을 위한 방법론이나 도구에 대해 관심이 생겼습니다.
		`,

        `
			2022년인데 기이하게도 Oracle DB에 PL/SQL을 사용했습니다.
			Front는 JSP에 JS를 얹어서 사용해서 관심사 분리가 전혀 되어 있지 않았고, 거기가 모든 CSS를 1개의 파일에 작성해서 UI관련 버그가 나면 수정이 불가능에 가까운 구조였습니다.
		`,
        `
			개발에서 Cloud의 DB를 그냥 사용했는데 Oracle Cloud Free Tier라 너무 느렸고, CI/CD는 당연히 없었기 때문에 배포도 수동으로 했습니다.
			더욱 놀라운건 처음에 Git을 사용하지 않았는데, 후에 이 모든게 생산성에 악영향을 끼치는걸 보면서 점차 도입해 나갔습니다.
			`,
        `
			하지만 처음 Spring을 배우지 않고 JDBC를 직접 사용해 보고, 이제는 안 좋은 기술이나 관습이라 여겨지는 것들을 (JSP, PL/SQL, MyBatis 등) 말만 듣는게 아니라 직접 사용하며 프로젝트를 하면서 
			좋은 관습이나 기술이 왜 좋은지 몸으로 느껴 정말 소중한 경험을 했다는 생각이 듭니다.
		`
    ]
}

export default portfolioSpringfeed