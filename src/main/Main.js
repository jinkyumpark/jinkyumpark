import React from 'react';
// Components
import IntroductionSection from './IntroductionSection';
import PortfolioSection from './PortfolioSection';
import TechnologySection from './TechnologySection';
import ResumeSection from './ResumeSection';
// data
import { profile } from '../data/profile';
import { channels } from '../data/channels';
import { portfolios } from '../data/portfolio';
import { technologies } from '../data/technology';

const Main = () => {
    return (
        <>
            <IntroductionSection introduction={profile} websites={channels} />
            <PortfolioSection portfolios={portfolios} />
            <TechnologySection technologies={technologies.back} />
            <ResumeSection />
        </>
    );
};

export default Main;
