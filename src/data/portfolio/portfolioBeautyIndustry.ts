import Product from "../../model/Product";
import ProductStatus from "../../model/ProductStatus";

import demo from '../../images/demo/beauty99.png'
import icon from '../../images/icons/beautyIndustry.png'
import WebsiteIcon from "../websiteIcon";

const portfolioBeautyIndustry: Product = {
	id: 6,
	status: ProductStatus.GIVE_UP,
	name: {
		korean: '미용업계',
		english: 'Beauty Industry',
		url: 'beauty-industry',
	},
	icon: icon,
	link: [
        {
            link: 'https://github.com/jinkyumpark/beauty-industry',
            icon: WebsiteIcon.github,
            border: false
        },
    ],
	thumbnailImage: demo,
	detailImage: demo,
	description: {
		short: '미용업계 종사자들을 위한 쉽고 편한 채용 플렛폼',
		medium: '',
		long: '',
	},
	features: [],
	demoImages: [],
	technologyUsed: [],
	challenges: [],
	participants: [
		{
			name: '박진겸',
			url: 'https://github.com/jinkyumpark',
			position: 'Developer (Front, Back)',
		},
		{
			name: '승현',
			url: '',
			position: 'Desinger',
		},
	],
    
	db: {
		images: [],
		explanations: [],
	},

	explanations: [
		
	]
}

export default portfolioBeautyIndustry