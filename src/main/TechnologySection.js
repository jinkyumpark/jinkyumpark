import React from 'react';
// Components
import TechnologyCard from '../technology/TechnologyCard';
import MoreButton from '../common/MoreButton';
// Data
import { technologiesDetailUrl } from '../data/url';

const TechnologySection = ({ technologies }) => {
    const buttonStyle = {
        backgroundColor: 'rgb(26, 188, 156)',
        color: 'white',
    };

    return (
        <section class='container text-center pt-5 pb-5 '>
            <h1>기술 스택</h1>
            <div className='row mt-5'>
                {technologies.slice(0, 4).map((technology) => {
                    return (
                        <div className='col-xs-12 col-sm-6 col-xl-3'>
                            <TechnologyCard technology={technology} />
                        </div>
                    );
                })}
            </div>

            <MoreButton style={buttonStyle} url={technologiesDetailUrl} />
        </section>
    );
};

export default TechnologySection;
