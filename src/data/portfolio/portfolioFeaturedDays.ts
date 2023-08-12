import Portfolio from "../../model/Portfolio";
import PortfolioStatus from "../../model/PortfolioStatus";

import demo from '../../images/demo/featureddays.jpeg'

const portfolioFeaturedDays: Portfolio = {
    id: 0,
    status: PortfolioStatus.PLANNED,
    name: {
        korean: "인생의 날",
        english: "Featured Days",
        url: "featured-days"
    },
    icon: "",
    link: [],
    thumbnailImage: demo,
    description: {
        short: "기억하고 싶은 인상적인 인생의 날들을 기록하세요",
        medium: "",
        long: ""
    },
    features: [],
    demoImages: [],
    technologyUsed: [],
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
    explanations: []
}

export default portfolioFeaturedDays