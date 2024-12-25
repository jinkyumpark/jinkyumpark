import Portfolio from "../../model/Portfolio";
import PortfolioStatus from "../../model/PortfolioStatus";

import demo from '../../images/demo/featureddays.png'
import icon from '../../images/icons/featureddaysicon.png'
import WebsiteIcon from "../websiteIcon";
import TechnologyData from "../TechnologyData";

const portfolioFeaturedDays: Portfolio = {
    id: 0,
    status: PortfolioStatus.PRODUCTION,
    name: {
        korean: "인생의 날",
        english: "Featured Days",
        url: "featured-days"
    },
    icon: icon,
    link: [
        {
            link: "https://apps.apple.com/app/featured-days/id6523433258",
            icon: WebsiteIcon.appleAppstore,
            border: false
        },
    ],
    thumbnailImage: demo,
    detailImage: demo,
    description: {
        short: `기억하고 싶은 날들을 기록하세요`,
        medium: `
            군대에 가기 전, 결혼기념일, 아이의 첫 생일, 정년, 평균 수명까지.
            <br/>
            인생에 중요한 여러 날들을 등록해 관리해 보세요.
        `,
        long: `
            인생에서 중요한 날을 돌아보며 정리하고 싶을 때가 있습니다.
            <br/>
            며칠, 몇 달이 지났는지 한 눈에 보고, 관련 사진, 메모를 모아둘 수 있습니다.
            <br/>
            위젯, 알림, 즐겨찾기로 쉽게 접근할 수도 있게 해 줍니다. 
        `
    },
    features: [
        `개인정보를 입력해 모든 사람의 인생에 중요한 날들을 자동으로 등록 (특정 나이까지, 정년까지, 평균 수명까지 등)`,
        `나만의 카테고리를 등록하고 관련 기록을 모아두기 (메모, 사진 등)`,
        `위젯, 알림, 즐겨찾기로 중요한 날을 놓치지 않기`,
    ],
    demoImages: [],
    technologyUsed: [
        TechnologyData.swift,
        TechnologyData.swiftUI,
        TechnologyData.cloudKit,
        TechnologyData.xCodeCloud
    ],
    challenges: [
        `
            처음에 스펙을 너무 크게 잡아서 계속 안 끝나 디모가 왔습니다. 이대로는 안 되겠다 싶어 최소한의 MVP로 스펙을 축소하고 일단 출시 해 기능을 점차 추가하는 식으로 바꿨습니다. 
            다른 2개의 앱도 이런식으로 출시하니 성공적으로 된 거 보면 앞으로도 이 전략을 유지해야겠다 싶습니다.
        `,
        `
            노가다 비중이 너무 많았습니다... 나라별, 성별별 평균 수명, 나라마다 다른 기념하는 날 등... 그래도 이걸 공통 라이브러리화 하고 앞으로 출시할 앱들의 자산으로 활용할 수 있겠다 싶어
            그나마 열심히 할 수 있었습니다.
        `
    ],
    participants: [
        {
            name: '박진겸',
            url: 'https://github.com/jinkyumpark',
            position: 'Developer'
        }
    ],
    db: {
        images: [],
        explanations: [
            `이벤트가 있고, 그 이벤트에 붙는 메모, 사진 등의 정보가 있습니다.`,
            `자동으로 만들어 주는 이벤트들은 DB에 저장되지 않지만 저장되는 것 처럼 다룹니다.`,
            `즐겨찾기는 따로 연관관계를 빼지 않고 이벤트의 Field에 넣습니다. (즐겨찾기 여부, 순서 등)`,
        ]
    },
    explanations: [
        `3번째로 출시하는 iOS앱인 만큼 단순히 출시에 목적을 두는게 아닌 비효율성을 개선하는것도 집중했습니다. 자주 쓰는 것들을 공통 라이브러리화 하고, 야매(?)로 만들던 디자인 리소스들 Figma를 사용해 만들었습니다.`,
    ]
}

export default portfolioFeaturedDays