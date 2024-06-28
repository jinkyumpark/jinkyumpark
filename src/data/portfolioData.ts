import Portfolio from "../model/Portfolio";
import portfolioBeautyIndustry from "./portfolio/portfolioBeautyIndustry";
import portfolioBoldPeople from "./portfolio/portfolioBoldPeople";

import portfolioBooksitout from "./portfolio/portfolioBooksitout";
import portfolioEveryonesGarden from "./portfolio/portfolioEveryonesgarden";
import portfolioPianoman from "./portfolio/portfolioPianoman";
import portfolioSimplyJournal from "./portfolio/portfolioSimplyJournal";
import portfolioSpringfeed from "./portfolio/portfolioSpringfeed";
import portfolioSubstrack from "./portfolio/portfolioSubstrack";
import portfolioPurrfitTracker from './portfolio/portfolioPurrfitTracker'
import portfolioFeaturedDays from "./portfolio/portfolioFeaturedDays";

const PortfolioData: Portfolio[] = [
	// Visible in Main
	portfolioBooksitout,
	portfolioPurrfitTracker,
	portfolioSubstrack,
	portfolioPianoman,
	portfolioEveryonesGarden,
	portfolioSpringfeed,

	// Hidden in Main
	portfolioFeaturedDays,
	portfolioSimplyJournal,
	portfolioBoldPeople,
	portfolioBeautyIndustry,
]

export default PortfolioData