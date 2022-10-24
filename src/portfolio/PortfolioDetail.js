import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { portfolios } from '../data/portfolioData';
import Error from '../common/Error';
import WebLink from '../common/WebLink';
import githubIcon from '../images/url-icon/github-icon.png';
import { Card } from 'react-bootstrap';

const PortfolioDetail = () => {
    const { portfolioName } = useParams();
    const [portfolio, setPortfolio] = useState(null);

    const mainErrorMessage = `${portfolioName}이라는 포트폴리오를 찾을 수 없어요`;
    const subErrorMessage = `다시 한 번 확인해 주세요`;

    useEffect(() => {
        const portfolioArray = portfolios.filter((portfolio) => {
            return portfolio.name === portfolioName;
        });
        setPortfolio(portfolioArray[0]);
    }, []);

    return (
        <div className='container text-center'>
            {portfolio === null || typeof portfolio === 'undefined' ? (
                <Error
                    mainErrorMessage={mainErrorMessage}
                    subErrorMessage={subErrorMessage}
                />
            ) : (
                <div className='container mb-5'>
                    <div className='row row-eq-height row-eq-height'>
                        <div className='col-xs-12 col-lg-6 mt-5'>
                            <img
                                src={portfolio.image}
                                alt={`${portfolio.name}`}
                                className='img-fluid rounded border'
                            />
                        </div>
                        <div className='col-xs-12 col-lg-6 mt-5'>
                            <Card className='h-100'>
                                <Card.Body className='d-grid'>
                                    <div className='div'>
                                        <h1>{`${portfolio.title} (${portfolio.participants}인)`}</h1>
                                        <h4 className='text-muted'>
                                            {portfolio.subtitle}
                                        </h4>
                                    </div>

                                    <p className='mt-3'>
                                        {portfolio.introduction}
                                    </p>

                                    <WebLink
                                        className='mt-auto'
                                        website={{
                                            icon: githubIcon,
                                            url: `${portfolio.githubLink}`,
                                        }}
                                    />
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PortfolioDetail;
