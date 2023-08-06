import React from 'react'
// Components
import Profile from '../resume/Profile'
import PortfolioSection from '../resume/PortfolioSection'
import TechnologySection from '../resume/TechnologySection'
import Language from '../resume/Language'
import ExperienceSection from '../resume/ExperienceSection'
// Data
import { portfolios } from '../data/portfolio'
import { technologies } from '../data/technology'
import { profile } from '../data/profile'
import SelfIntroductionSection from '../resume/SelfIntroductionSection'

const Resume = () => {
	return (
		<div className='container mt-5 text-center'>
			{/* <Profile profile={profile} /> */}
			{/* <PortfolioSection portfolios={portfolios} /> */}
			{/* <TechnologySection technologies={[].concat(...Object.values(technologies))} size={8} /> */}
			{/* <SelfIntroductionSection introductions={profile.introductions} /> */}
			{/* <Language profile={profile} /> */}
			{/* <ExperienceSection profile={profile} /> */}
		</div>
	)
}

export default Resume
