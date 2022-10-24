import React from 'react';
import { Card } from 'react-bootstrap';
// Components
import PortfolioCard from '../portfolio/PortfolioCard';

const PortfolioSection = ({ portfolios }) => {
    return (
        <Card className='mb-5'>
            <Card.Body>
                <div className='row justify-content-center'>
                    <h2 className='mt-4 mb-5'>포트폴리오</h2>
                    {portfolios.map((portfolio) => {
                        return (
                            <div className='col-xs-12 col-sm-6 col-xl-4'>
                                <Card className='p-2 mb-3'>
                                    <PortfolioCard
                                        portfolio={portfolio}
                                        textStyle='text-black'
                                    />
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </Card.Body>
        </Card>
    );
};

export default PortfolioSection;
