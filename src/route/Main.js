import React from 'react'
// Components
import IntroductionSection from '../main/IntroductionSection'
import PortfolioSection from '../main/PortfolioSection'
import TechnologySection from '../main/TechnologySection'
import ResumeSection from '../main/ResumeSection'
// data
import { profile } from '../data/profile'
import { channels } from '../data/channels'
import { portfolios } from '../data/portfolio'
import { technologies } from '../data/technology'

const Main = () => {
	return (
		<>
			<IntroductionSection introduction={profile} websites={channels} />
			<PortfolioSection portfolios={portfolios} />
			<TechnologySection technologies={technologies.back} />
			<ResumeSection />
		</>
	)
}

export default Main
