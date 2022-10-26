import React from 'react';
// Components
import Profile from './Profile';
import PortfolioSection from './PortfolioSection';
import TechnologySection from './TechnologySection';
import Language from './Language';
import ExperienceSection from './ExperienceSection';
// Data
import { portfolios } from '../data/portfolio';
import { technologies } from '../data/technology';
import { profile } from '../data/profile';

const Resume = () => {
    return (
        <div className='container mt-5 text-center'>
            <Profile profile={profile} />
            <PortfolioSection portfolios={portfolios} />
            <TechnologySection technologies={technologies.back} />
            <Language profile={profile} />
            <ExperienceSection profile={profile} />
        </div>
    );
};

export default Resume;
