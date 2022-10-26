import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Card } from 'react-bootstrap';
// Components
import Error from '../common/Error';
// Data
import { technologies } from '../data/technology';
import { portfolios } from '../data/portfolio';
// Resources
import tstoryIcon from '../images/url-icon/tstory-icon.png';
import { BiErrorCircle as ErrorIcon } from 'react-icons/bi';
import PortfolioCard from '../portfolio/PortfolioCard';

const TechnologyDetail = () => {
    const { technologyName } = useParams();
    const [technology, setTechnology] = useState(null);

    const mainErrorMessage = `${technologyName}이라는 보유 기술은 없어요`;
    const subErrorMessage = `다시 한 번 확인해 주세요`;

    useEffect(() => {
        const technologyArray = []
            .concat(...Object.values(technologies))

            .filter(
                (tech) =>
                    tech.name.trim().toLowerCase().replaceAll(' ', '') ===
                    technologyName.trim().toLowerCase().replaceAll(' ', '')
            );
        setTechnology(technologyArray[0]);
    }, []);

    return (
        <>
            {technology === null || typeof technology === 'undefined' ? (
                <Error
                    mainErrorMessage={mainErrorMessage}
                    subErrorMessage={subErrorMessage}
                />
            ) : (
                <div className='container mt-5 mb-5'>
                    <TechnologyCardFullList technology={technology} />
                    <BlogCard technology={technology} />
                    <PortfolioUsedCard
                        technology={technology}
                        portfolios={portfolios.filter((port) =>
                            port.technologiesUsed.includes(technology.id)
                        )}
                    />
                </div>
            )}
        </>
    );
};

const TechnologyCardFullList = ({ technology }) => {
    return (
        <Card className='mb-5'>
            <div className='row'>
                <div className='col-xs-12 col-lg-3 text-center'>
                    <img
                        src={technology.icon}
                        alt={`${technology.name}-icon`}
                        className='img-fluid mt-3 ps-3'
                    />
                    <h3 className='m-3'>{technology.name}</h3>
                </div>
                <div className='col-xs-12 col-lg-8'>
                    <Card.Body>
                        <div className='list-group list-group-flush'>
                            {technology.features.map((feature) => {
                                return (
                                    <li className='list-group-item'>
                                        {feature}
                                    </li>
                                );
                            })}
                        </div>
                    </Card.Body>
                </div>
            </div>
        </Card>
    );
};

const BlogCard = ({ technology }) => {
    const errorIconStyle = {
        width: '150px',
        height: '100px',
    };

    return (
        <Card className='mb-5'>
            <Card.Header>
                <h4 className='text-center'>
                    {technology.name}에 관한 블로그 포스트 보러가기
                </h4>
            </Card.Header>
            <Card.Body className='text-center row justify-content-center'>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href={technology.blogUrl}
                    className='ms-3 me-3 text-decoration-none text-black align-items-center col-xs-12 col-lg-6'
                >
                    <Card className=''>
                        <Card.Body>
                            {technology.blogUrl.length === 0 ? (
                                <div className='text-center'>
                                    <ErrorIcon
                                        className='text-danger'
                                        style={errorIconStyle}
                                    />
                                    <h3 className=''>
                                        아직 블로그 포스트가 없어요
                                    </h3>
                                </div>
                            ) : (
                                <>
                                    <img
                                        src={tstoryIcon}
                                        alt={`${technology.blogUrl}-icon`}
                                        className='img-responsive rounded-circle'
                                        style={{
                                            width: '70px',
                                        }}
                                    />
                                    <h4 className='mt-2'>
                                        {technology.name} 관련 블로그 포스트
                                        모두보기
                                    </h4>
                                </>
                            )}
                        </Card.Body>
                    </Card>
                </a>
            </Card.Body>
        </Card>
    );
};

const PortfolioUsedCard = ({ technology, portfolios }) => {
    return (
        <Card>
            <Card.Header>
                <h4 className='text-center'>
                    {technology.name} 사용된 포트폴리오
                </h4>
            </Card.Header>
            <Card.Body>
                <div className='row justify-content-center'>
                    {portfolios.map((port) => {
                        return (
                            <div className='col-xs-12 col-6 col-xl-4'>
                                <PortfolioCard
                                    portfolio={port}
                                    textStyle='text-center text-black'
                                />
                            </div>
                        );
                    })}
                </div>
            </Card.Body>
        </Card>
    );
    // return <>

    //     {
    //         portfolios.length == 0 ? (<Error subErrorMessage='이 기술이 사용된 포트폴리오가 없어요'>)
    //         :

    //             portfolios.map((port) => {
    //                 <PortfolioCard portfolio={port}/>
    //             })
    //     }

    // </>)
};

export default TechnologyDetail;
