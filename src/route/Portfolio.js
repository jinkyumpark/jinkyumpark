import React from 'react';
import { Card } from 'react-bootstrap';

import { portfolios } from '../data/portfolio';
import PortfolioCard from '../portfolio/PortfolioCard';

const Portfolio = () => {
    return (
        <div className='container mt-5 mb-5 text-center'>
            <h2 className='mb-5 text-start'>포트폴리오</h2>
            <div className='row justify-content-center'>
                {portfolios.map((portfolio) => {
                    return (
                        <div className='col-xs-12 col-lg-6 col-xl-4 mb-3'>
                            <Card>
                                <Card.Body>
                                    <PortfolioCard
                                        portfolio={portfolio}
                                        textStyle='text-black'
                                    />
                                </Card.Body>
                            </Card>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Portfolio;
