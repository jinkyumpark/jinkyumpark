import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Card } from 'react-bootstrap';
// Components
import Error from '../common/Error';
import TechnologyCard from './TechnologyCard';
import WebLink from '../common/WebLink';
// Data
import { technologies } from '../data/technologyData';
// Resources
import tstoryIcon from '../images/url-icon/tstory-icon.png';

const TechnologyDetail = () => {
    const { technologyName } = useParams();
    const [technology, setTechnology] = useState(null);

    useEffect(() => {
        const technologyArray = technologies.filter(
            (tech) => tech.name.toLowerCase() === technologyName.toLowerCase()
        );
        setTechnology(technologyArray[0]);
    }, []);

    return (
        <>
            {technology === null || typeof technology === 'undefined' ? (
                <Error
                    mainErrorMessage={`${technologyName}이라는 보유 기술은 없어요`}
                    subErrorMessage={`다시 한 번 확인해 주세요`}
                />
            ) : (
                <div className='container mt-5 mb-5'>
                    <Card className='mb-5'>
                        <div className='row'>
                            <div className='col-xs-12 col-lg-3 text-center'>
                                <img
                                    src={technology.icon}
                                    alt={`${technology.name}-icon`}
                                    className='img-fluid mt-3'
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

                    <Card>
                        <Card.Header>
                            <h4 className='text-center'>
                                {technology.name}에 관한 블로그 포스트 보러가기
                            </h4>
                        </Card.Header>
                        <Card.Body className='text-center'>
                            <a
                                target='_blank'
                                rel='noreferrer'
                                href={technology.blogUrl}
                                className='ms-3 me-3 text-decoration-none text-black align-items-center'
                            >
                                <img
                                    src={tstoryIcon}
                                    alt={`${technology.blogUrl}-icon`}
                                    className='img-responsive rounded-circle'
                                    style={{
                                        width: '70px',
                                    }}
                                />
                                <h4 className='mt-2'>
                                    티스토리 블로그 바로가기
                                </h4>
                            </a>
                        </Card.Body>
                    </Card>
                </div>
            )}
        </>
    );
};

export default TechnologyDetail;
