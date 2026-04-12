import Product from "../../model/Product";
import ProductStatus from "../../model/ProductStatus";
import WebsiteIcon from "../websiteIcon";
import thumbnail from '../../images/demo/lost-things.png'
import TechnologyData from "../TechnologyData";

const portfolioLostThings: Product = {
	id: 21,
	status: ProductStatus.PRODUCTION,
	name: {
		korean: '잃어버린 것들',
		english: 'Lost Things',
		url: 'lost-things',
	},
	icon: WebsiteIcon.lostThings,
	link: [
		{
			link: 'https://minion.toss.im/BjYRPHFt',
			icon: WebsiteIcon.toss,
			border: false,
		},
		{
			link: 'https://github.com/booksitout/lost-things-appsintoss',
			icon: WebsiteIcon.github,
			border: false,
		},
	],
	description: {
		short: `앱인토스, 여러 곳의 분실물을 1곳에서`,
		medium: `
			토스 앱 안에서 동작하는 분실물 찾기 미니앱.
			경찰청 분실물 데이터를 활용해 잃어버린 물건을 쉽게 찾을 수 있도록 도와줍니다.`,
		long: `
			지갑, 휴대폰, 가방 등 잃어버린 물건을 찾고 싶을 때,
			토스 앱에서 바로 분실물을 검색하고 저장할 수 있는 미니앱입니다.
			<br/>
			<br/>
			새로운 분실물을 확인하고, 관심 있는 분실물을 저장해 두고,
			상세 정보를 확인할 수 있습니다.
			<br/>
			<br/>
			토스의 AppsInToss 플랫폼 위에서 동작하며, TDS(Toss Design System)를 사용해
			토스 앱의 일부처럼 자연스러운 UX를 제공합니다.
		`,
	},
	features: [
		'새로운 분실물 목록 확인',
		'관심 분실물 저장 및 관리',
		'분실물 상세 정보 확인',
		'토스 앱 내에서 자연스러운 UX 제공',
	],
	demoImages: [],
	technologyUsed: [TechnologyData.typescript, TechnologyData.react],
	challenges: [],
	participants: [
		{
			name: '박진겸',
			url: 'https://github.com/jinkyumpark',
			position: 'Developer',
		},
	],
	thumbnailImage: thumbnail,
	detailImage: thumbnail,

	db: {
		images: [],
		explanations: [],
	},

	explanations: [
		`토스 AppsInToss 플랫폼의 WebView 미니앱으로 개발`,
		`TDS(Toss Design System) 컴포넌트를 활용한 네이티브급 UI/UX`,
		`React + TypeScript + Vite 기반 프론트엔드 구성`,
	],
}

export default portfolioLostThings
