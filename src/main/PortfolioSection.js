import React from 'react';
// Components
import SimplePortfolioCard from '../portfolio/SimplePortfolioCard';

const PortfolioSection = ({ portfolios }) => {
    return (
        <section
            class='text-center text-white pt-5 pb-5'
            style={{
                backgroundColor: 'rgb(26, 188, 156)',
            }}
        >
            <div className='container'>
                <h1>포트폴리오</h1>
                <div className='row justify-content-center'>
                    {portfolios.map((portfolio) => {
                        return (
                            <div className='col-xs-12 col-sm-6 col-xl-4 mt-5'>
                                <SimplePortfolioCard
                                    portfolio={portfolio}
                                    textStyle='text-white'
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
