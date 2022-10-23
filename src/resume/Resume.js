import React from 'react';
// Components
import Profile from './Profile';
import PortfolioSection from './PortfolioSection';
import TechnologySection from './TechnologySection';
import Language from './Language';
// Data
import { portfolios } from '../data/portfolioData';
import { technologies } from '../data/technologyData';

const Resume = () => {
    return (
        <div className='container mt-5 text-center'>
            <Profile />
            <PortfolioSection portfolios={portfolios} />
            <TechnologySection technologies={technologies} />
            <Language />
        </div>
    );
};

export default Resume;
