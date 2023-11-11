import React from 'react'
import IntroductionSection from '../main/IntroductionSection'
import PortfolioSection from '../main/PortfolioSection'
import { profile } from '../data/profile'
import { channels } from '../data/channels'
import PortfolioData from '../data/portfolioData'
import Footer from '../common/Footer'

const Main = () => {
	return (
		<>
			<IntroductionSection introduction={profile} websites={channels} />
			<PortfolioSection portfolios={PortfolioData} />
			
			<Footer/>
		</>
	)
}

export default Main
