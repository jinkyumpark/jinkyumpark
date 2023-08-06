import Portfolio from "../../model/Portfolio";
import PortfolioStatus from "../../model/PortfolioStatus";
import WebsiteIcon from "../websiteIcon";

import demo from '../../images/demo/substrack.jpeg'
import icon from '../../images/icons/substrack.png'

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
	technologyUsed: ['swift', 'swiftui', 'cloudkit', 'coredata', 'xcodecloud'],
	challenges: [],
	participants: [
		{
			name: '박진겸',
			url: 'https://github.com/jinkyumpark',
			position: 'Developer'
		}
	],

	developmentStartDate: new Date('2023-06-29'),
	thumbnailImage: demo
}

export default portfolioSubstrack