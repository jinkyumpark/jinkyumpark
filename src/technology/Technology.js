import React from 'react';
import { technologies } from '../data/technologyData';
import TechnologyCard from './TechnologyCard';

const Technology = () => {
    return (
        <div className='container mt-5'>
            <h2>보유 기술</h2>

            <div className='row'>
                {technologies.map((technology) => {
                    return (
                        <div className='col-4'>
                            <TechnologyCard technology={technology} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Technology;
