import React from 'react';
// Components
import TechnologyCard from '../resume/TechnologyCard';
import { Button } from 'react-bootstrap';
import { technologiesDetailUrl } from '../data/urlData';

const TechnologySection = ({ technologies }) => {
    const buttonStyle = {
        backgroundColor: 'rgb(26, 188, 156)',
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

            <div className='row justify-content-center mt-3'>
                <div className='d-grid col-xs-12 col-lg-5'>
                    <Button
                        variant='light'
                        style={buttonStyle}
                        className='text-white'
                        href={technologiesDetailUrl}
                    >
                        더 보기
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default TechnologySection;
