import Portfolio from "../../model/Portfolio";
import PortfolioStatus from "../../model/PortfolioStatus";
import WebsiteIcon from "../websiteIcon";
import thumbnail from '../../images/demo/raycast-extensions-naver.png'
import TechnologyData from "../TechnologyData";

const portfolioRaycastExtensionNaverSearch: Portfolio = {
    id: 20,
    status: PortfolioStatus.STARTED,
    name: {
        korean: `Raycast 네이버 Extension`,
        english: `Raycast Naver Search Extension`,
        url: 'raycast-naver-extension'
    },

    link: [
        {
            link: `https://www.raycast.com/magneto/naver-search`,
            icon: WebsiteIcon.raycast,
            border: false,
        },
        {
            link: `https://github.com/raycast/extensions/pull/20235`,
            icon: WebsiteIcon.github,
            border: false,
        }
    ],

    challenges: [
        `해당 Extension이 개발된지 오래 돼 그 동안 API에 변경이 많이 있어 Raycast Docs에 있는 내용이 해당하지 않는 경우가 많았습니다. 이 때문에 옛날 Docs 버전이나 비슷한 시기에 만들어진 Extension에 있는 코드들을 참고했습니다.`,
        `Open Source에 기여하는게 처음이라 PR을 올린 뒤에 리뷰를 받았는데, 이 수정 사항을 어떻게 다시 PR에 반영해야 할지 등 기초적인 것에서 생각보다 헤맸습니다.`
    ],

    db: {
        images: [],
        explanations: [],
    },

    demoImages: [],

    description: {
        short: `Raycast 네이버 검색 Extension에 기능 추가 PR`,
        medium: ``,
        long: `
            기존에 있던 Raycast 네이버 검색 Extension에 선택한 키워드를 바로 네이버 검색할 수 있는 기능을 추가했습니다. 
            해당 기능은 단축키 할당하거나 검색하고 싶은 단어를 마우스로 선택한 채로 Raycast에서 해당 명령어를 실행해 사용할 수 있습니다.
            현재 마우스에 선택된 단어가 없으면 Clipboard에 있는 단어를 사용할지 설정 가능합니다. 이렇게 설정하면 Clipboard의 첫 번째 단어를 검색합니다.
        `,
    },

    detailImage: thumbnail,
    developmentStartDate: undefined,
    explanations: [],

    features: [
        "선택된 키워드 바로 네이버 검색 (단축키 할당하거나 Raycast에서 선택 가능)",
        "현재 마우스에 선택된 단어가 없으면 Clipboard에 있는 단어 사용할지 설정 가능",
    ],

    icon: WebsiteIcon.raycast,
    participants: [
        {
            name: '박진겸',
            url: 'https://github.com/jinkyumpark',
            position: 'Developer'
        }
    ],
    technologyUsed: [
        TechnologyData.typescript
    ],
    thumbnailImage: thumbnail
}

export default portfolioRaycastExtensionNaverSearch