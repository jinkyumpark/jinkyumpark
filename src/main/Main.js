import React from 'react';
// Components
import IntroductionSection from './IntroductionSection';
import PortfolioSection from './PortfolioSection';
import TechnologySection from './TechnologySection';
import ResumeSection from './ResumeSection';
// data
import { introduction } from '../data/introductionData';
import { websites } from '../data/websiteData';
import { portfolios } from '../data/portfolioData';
import { technologies } from '../data/technologyData';

const Main = () => {
    return (
        <>
            <IntroductionSection
                introduction={introduction}
                websites={websites}
            />
            <PortfolioSection portfolios={portfolios} />
            <TechnologySection technologies={technologies} />
            <ResumeSection />
        </>
    );
};

export default Main;
