import Portfolio from "../model/Portfolio";
import portfolioBeautyIndustry from "./portfolio/portfolioBeautyIndustry";
import portfolioBooksitout from "./portfolio/portfolioBooksitout";
import portfolioEveryonesGarden from "./portfolio/portfolioEveryonesgarden";
import portfolioPianoman from "./portfolio/portfolioPianoman";
import portfolioSimplyJournal from "./portfolio/portfolioSimplyJournal";
import portfolioSpringfeed from "./portfolio/portfolioSpringfeed";
import portfolioSubstrack from "./portfolio/portfolioSubstrack";
import portfolioPurrfitTracker from './portfolio/portfolioPurrfitTracker'

const PortfolioData: Portfolio[] = [
	portfolioBooksitout,
	portfolioSubstrack,
	
	portfolioEveryonesGarden,
	portfolioPurrfitTracker,
	portfolioBeautyIndustry,

	portfolioPianoman,
	portfolioSimplyJournal,
	portfolioSpringfeed,
]

export default PortfolioData