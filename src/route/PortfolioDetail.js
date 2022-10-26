import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { portfolios } from '../data/portfolio';
import Error from '../common/Error';
import WebLink from '../common/WebLink';
import githubIcon from '../images/url-icon/github-icon.png';
import { Card } from 'react-bootstrap';
import websiteIcon from '../images/url-icon/website-1.png';
import { BiErrorCircle as ErrorIcon } from 'react-icons/bi';
import { technologies } from '../data/technology';

import '../css/hover-effect.css';

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
                            <BasicInfoCard portfolio={portfolio} />
                        </div>

                        <div className='col-xs-12 col-lg-6 mt-5'>
                            <ListCard
                                title={'주요 기능'}
                                list={portfolio.primaryFeatures}
                            />
                        </div>

                        <div className='col-xs-12 col-lg-6 mt-5'>
                            <ListCard
                                title='어려웠던 점'
                                list={portfolio.difficulties}
                            />
                        </div>

                        <div className='col-12 mt-5'>
                            <TechnologyUsedCard portfolio={portfolio} />
                        </div>

                        <div className='col-12 mt-5'>
                            <DatabaseCard portfolio={portfolio} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const BasicInfoCard = ({ portfolio }) => {
    return (
        <Card className='h-100'>
            <Card.Body className='d-grid'>
                <div className='div mt-xl-4'>
                    <h1>{`${portfolio.title} (${portfolio.participants}인)`}</h1>
                    <h4 className='text-muted'>{portfolio.subtitle}</h4>
                </div>

                <p className='mt-3'>{portfolio.introduction}</p>

                <div className='div'>
                    <WebLink
                        website={{
                            icon: githubIcon,
                            url: `${portfolio.githubLink}`,
                        }}
                    />
                    <WebLink
                        website={{
                            icon: websiteIcon,
                            url: `${portfolio.siteLink}`,
                        }}
                    />
                </div>
            </Card.Body>
        </Card>
    );
};

const ListCard = ({ title, list }) => {
    const errorIconStyle = {
        width: '150px',
        height: '100px',
    };

    return (
        <Card className='h-100'>
            <Card.Body>
                <h3>{title}</h3>

                {list.length === 0 && (
                    <div className='text-center'>
                        <ErrorIcon
                            className='text-danger mt-4'
                            style={errorIconStyle}
                        />
                        <h4 className='mt-3'>
                            {`아직 ${title}이 등록되지 않았아요`}
                        </h4>
                    </div>
                )}
                <div className='list-group'>
                    {list.map((feature) => {
                        return <div className='list-group-item'>{feature}</div>;
                    })}
                </div>
            </Card.Body>
        </Card>
    );
};

const TechnologyUsedCard = ({ portfolio }) => {
    const [techologiesUsed, setTechnologiesUsed] = useState([]);

    useEffect(() => {
        const technologiesUsedArray = portfolio.technologiesUsed.map((id) =>
            []
                .concat(...Object.values(technologies))
                .find((tech) => tech.id === id)
        );

        setTechnologiesUsed(technologiesUsedArray);
    }, []);

    return (
        <Card className='h-100'>
            <Card.Body>
                <h3>사용된 기술</h3>
                <div className='row'>
                    {techologiesUsed.map((tech) => {
                        return (
                            <div className='col-6 col-lg-3 col-xl-2 mt-4'>
                                <TechIcon technology={tech} />
                            </div>
                        );
                    })}
                </div>
            </Card.Body>
        </Card>
    );
};

const TechIcon = ({ technology }) => {
    return (
        <Card className='hover-effect'>
            <Card.Body>
                <img
                    src={technology.icon}
                    alt={`${technology.name} icon`}
                    className='img-fluid'
                    style={{
                        width: '100px',
                        height: '100px',
                    }}
                />
                <h5 className='mt-3 mb-0'>{technology.name}</h5>
            </Card.Body>
        </Card>
    );
};

const DatabaseCard = ({ portfolio }) => {
    return (
        <Card className='h-100'>
            <Card.Body>
                <h3>ER Diagram</h3>
                <img
                    src={portfolio.erDiagram}
                    alt='springfeed-er-diagram'
                    className='img-fluid border mt-4 hover-effect'
                />
            </Card.Body>
        </Card>
    );
};

export default PortfolioDetail;
