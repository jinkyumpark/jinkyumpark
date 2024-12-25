import Portfolio from "../../model/Portfolio";
import WebsiteIcon from "../websiteIcon";
import PortfolioStatus from "../../model/PortfolioStatus";
import icon from '../../images/icons/simplifiedGoogleTask.png'
import demo from '../../images/demo/simplifiedGoogleTask.png'

const portfolioSimplifyGoogleTask: Portfolio = {
    id: 10,
    status: PortfolioStatus.PRODUCTION,
    name: {
        korean: '구글 테스크 청소기',
        english: 'Simplified Google Task',
        url: 'simplified-google-task',
    },
    icon: icon,
    link: [
        {
            link: "https://chromewebstore.google.com/detail/simplified-google-task/afbfiknnjongdnpklecckkgfehdojmgi",
            icon: WebsiteIcon.googleChrome,
            border: true
        },
        {
            link: "https://github.com/jinkyumpark/simplified-google-task",
            icon: WebsiteIcon.github,
            border: true
        }
    ],
    thumbnailImage: demo,
    detailImage: demo,
    demoImages: [],
    description: {
        short: `구글 테스크의 UI를 청소`,
        medium: `필요 없는 정보들이 넘치는 상단바나,<br/>새로고침 할 때 마다 나오는 왼쪽 메뉴를 가려서<br/>TODO에만 집중할 수 있게 도와줍니다.`,
        long: `필요 없는 정보들이 넘치는 상단바나, 새로고침 할 때 마다 나오는 왼쪽 메뉴를 가려서 TODO에만 집중할 수 있게 도와줍니다.`
    },
    features: ["구글 테스트의 일부 UI를 가려서 TODO에만 집중할 수 있게 함"],
    technologyUsed: [],
    challenges: [],
    participants: [
        {
            name: '박진겸',
            url: 'https://github.com/jinkyumpark',
            position: 'Developer'
        }
    ],
    db: {images: [], explanations: []},
    explanations: [
        "Google Chrome Extension의 기본적인 기능만 사용했습니다.",
        "특정 사이트 (Google Task)에 접속했을 때의 HTML, CSS를 조작하는 방식입니다.",
        "ON/OFF 상태에 따라 조작 여부를 조정해야 하기 때문에 모두 JS로 작성했습니다."
    ]
}

export default portfolioSimplifyGoogleTask