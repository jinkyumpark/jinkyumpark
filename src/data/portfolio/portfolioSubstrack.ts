import Portfolio from "../../model/Portfolio";
import PortfolioStatus from "../../model/PortfolioStatus";
import WebsiteIcon from "../websiteIcon";

import demo from '../../images/demo/substrack.jpeg'
import icon from '../../images/icons/substrack.png'
import TechnologyData from "../TechnologyData";

const portfolioSubstrack: Portfolio = {
    id: 2,
    status: PortfolioStatus.PRODUCTION,
    name: {
        korean: '구독 돌보미',
        english: 'substrack',
        url: "substrack"
    },
    icon: icon,
    link: [
        {
            link: 'https://apps.apple.com/app/%EA%B5%AC%EB%8F%85-%EB%8F%8C%EB%B3%B4%EB%AF%B8/id6451234943',
            icon: WebsiteIcon.appleAppstore,
            border: false,
        },
        {
            link: 'https://github.com/jinkyumpark/substrack',
            icon: WebsiteIcon.github,
            border: false,
        },
    ],
    description: {
        short: `넘쳐나는 구독 서비스, 쉽게 관리하기`,
        medium: `
		내가 언제 어떤 이런 서비스를 구독했는지, 헷갈리지 않으세요? 
		<br/>
		구독 돌보미가 구독을 쉽고 편하게 관리해 드려요.
		`,
        long: `
            필요해서 구독했는데 더 이상 쓰지 않거나, 이번달만 쓰고 해지하려 했는데 까먹거나,
            꼭 필요하고 편한 구독 서비스지만, 너무 많아 점점 관리하기 힘들지 않으세요?
            <br/>
            <br/>

            구독 돌보미를 써 구독 서비스를 1곳에 모아 관리할 수 있어요. 
            <br/>
            <br/>

            결제일 D-Day를 한 눈에 봐서 미리 계획하고, 필요없는 구독은 미리 해지할 수 있어요.
            또, 나에게 필요할 지도 모르는 다양한 구독 서비스들을 둘러볼 수 있어요.
        `,
    },
    features: [`내 구독 서비스들을 등록해 언제 얼마나 결제되는지 관리하기`, `결제되기 전 알림`, `새로운 구독 서비스 둘러보기`],
    demoImages: [demo],
    technologyUsed: [
        TechnologyData.swift,
        TechnologyData.swiftUI,
        TechnologyData.cloudKit,
        TechnologyData.coreData,
        TechnologyData.xCodeCloud
    ],
    challenges: [
        `처음 iOS 개발을 하다보니 기존의 익숙했던 IDE의 단축키나 기능들이 모두 다르거나 없는 XCode를 사용하면서 속도가 떨어져서 답답했습니다.`,
        `여러 iOS 버전에 따라 쓸 수 있는 기능이 다르다 보니 Deprecated 된 기능을 사용하거나, 새로운 기능을 써 보고 싶은데 아직 Beta라 아쉬웠습니다.`,
    ],
    participants: [
        {
            name: '박진겸',
            url: 'https://github.com/jinkyumpark',
            position: 'Developer'
        }
    ],

    developmentStartDate: new Date('2023-06-29'),
    thumbnailImage: demo,
    detailImage: demo,

    db: {
        images: [],
        explanations: [
            `UserSubscription이 Subscription을 Reference하는 극히 단순한 구조로 되어 있습니다.`,
            `Subscription은 Cloudkit의 Public Container에 저장해서 가져오고, UserSubscription은 Private Container에 저장했습니다.`,
            `추후에 계좌 정보, 유저가 직접 구독 추가도 고민중에 있습니다.`,
        ]
    },

    explanations: [
        `SwiftUI의 기본 기능과 Human Interface Guideline을 가능한 한 따라 Apple이 만든 기본 iOS앱 같은 느낌을 주려고 했습니다.`,
        `설정은 UserDefaults에서 관리하고, 나머지 데이터는 CoreData에서 관리한 다음 CloudKit에 sync 했습니다.`,
        `XCode Cloud를 사용해서 CI를 구축해 Github main brach에 merge 하면 AppStore Connect에 자동으로 build가 저장되게 구성했습니다.`,
    ]
}

export default portfolioSubstrack