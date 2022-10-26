import React from 'react';
import { Card } from 'react-bootstrap';
// Components
import TechnologyCard from '../technology/TechnologyCard';
import MoreButton from '../common/MoreButton';
// Data
import { technologiesDetailUrl } from '../data/url';
import { coloredButtonStyle } from '../common/style';

const TechnologySection = ({ technologies }) => {
    return (
        <Card className='mb-5'>
            <Card.Body>
                <h2 className='mt-4 mb-5'>보유 기술</h2>
                <div className='row'>
                    {technologies
                        .filter((technology) => technology.featured)
                        .slice(0, 4)
                        .map((technology) => {
                            return (
                                <div className='col-xs-12 col-sm-6 col-xl-3'>
                                    <TechnologyCard technology={technology} />
                                </div>
                            );
                        })}
                </div>

                <MoreButton
                    style={coloredButtonStyle}
                    url={technologiesDetailUrl}
                />
            </Card.Body>
        </Card>
    );
};

export default TechnologySection;
