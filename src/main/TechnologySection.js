import React from 'react';
// Components
import TechnologyCard from '../resume/TechnologyCard';

const TechnologySection = ({ technologies }) => {
    return (
        <section class='container text-center pt-5 pb-5 '>
            <h1>기술 스택</h1>

            <div className='row mt-5'>
                {technologies.map((technology) => {
                    return (
                        <div className='col-xs-12 col-sm-6 col-xl-3'>
                            <TechnologyCard technology={technology} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default TechnologySection;
