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
        long: ""
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
        explanations: []
    },
    explanations: [
        `3번째로 출시하는 iOS앱인 만큼 단순히 출시에 목적을 두는게 아닌 비효율성을 개선하는것도 집중했습니다. 자주 쓰는 것들을 공통 라이브러리화 하고, 야매(?)로 만들던 디자인 리소스들 Figma를 사용해 만들었습니다.`,
    ]
}

export default portfolioFeaturedDays