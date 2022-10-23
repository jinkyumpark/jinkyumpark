import React from 'react';
import { Card } from 'react-bootstrap';
// Components
import TechnologyCard from './TechnologyCard';

const Technology = ({ technologies }) => {
    return (
        <Card className='mb-5'>
            <Card.Body>
                <h2 className='mt-4 mb-5'>보유 기술</h2>
                <div className='row'>
                    {technologies
                        .filter((technology) => technology.featured)
                        .map((technology) => {
                            return (
                                <div className='col-xs-12 col-sm-6 col-xl-3'>
                                    <TechnologyCard technology={technology} />
                                </div>
                            );
                        })}
                </div>
            </Card.Body>
        </Card>
    );
};

export default Technology;
