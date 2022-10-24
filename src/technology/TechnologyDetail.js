import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Card } from 'react-bootstrap';
// Components
import Error from '../common/Error';
// Data
import { technologies } from '../data/technology';
// Resources
import tstoryIcon from '../images/url-icon/tstory-icon.png';

const TechnologyDetail = () => {
    const { technologyName } = useParams();
    const [technology, setTechnology] = useState(null);

    const mainErrorMessage = `${technologyName}이라는 보유 기술은 없어요`;
    const subErrorMessage = `다시 한 번 확인해 주세요`;

    useEffect(() => {
        const technologyArray = technologies.filter(
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
                    <FullTechnologyCard technology={technology} />
                    <BlogCard technology={technology} />
                </div>
            )}
        </>
    );
};

const FullTechnologyCard = ({ technology }) => {
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
    return (
        <Card>
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
                            <img
                                src={tstoryIcon}
                                alt={`${technology.blogUrl}-icon`}
                                className='img-responsive rounded-circle'
                                style={{
                                    width: '70px',
                                }}
                            />
                            <h4 className='mt-2'>
                                {technology.name} 관련 블로그 포스트 모두보기
                            </h4>
                        </Card.Body>
                    </Card>
                </a>
            </Card.Body>
        </Card>
    );
};

export default TechnologyDetail;
