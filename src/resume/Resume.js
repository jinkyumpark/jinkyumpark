import React from 'react';
// Components
import Profile from './Profile';
import ResumePortfolio from './ResumePortfolio';
import Technology from './Technology';
import Language from './Language';
// Data
import { portfolios } from '../data/portfolioData';
import { technologies } from '../data/technologyData';

const Resume = () => {
    return (
        <div className='container mt-5 text-center'>
            <Profile />
            <ResumePortfolio portfolios={portfolios} />
            <Technology technologies={technologies} />
            <Language />
        </div>
    );
};

export default Resume;
