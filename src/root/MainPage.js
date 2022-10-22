import React from 'react';
import { Link } from 'react-router-dom';
// Profile
import profile from '../images/main-profile.jpg';
// Icon
import githubIcon from '../images/github-icon.png';
import linkedinIcon from '../images/linkedin-icon.png';
import tstoryIcon from '../images/tstory-icon.png';
// Portfolio
import simplyJournal from '../images/simply-journal.png';
import springfeed from '../images/springfeed.png';
// Technology
import javaIcon from '../images/technologies/java-icon.png';
import springIcon from '../images/technologies/spring-icon.png';
import jpaIcon from '../images/technologies/jpa-icon.png';
import springSecurityIcon from '../images/technologies/spring-security-icon.png';

const MainPage = () => {
    const introductionTitle = `확장성과 Clean Code를 중요시하는 개발자, 박진겸입니다`;
    const introductionSummary = `저는 기초를 중요하게 생각합니다. 당장은 임기응변으로 어떻게든 동작하는 서비스를 만들 수는 있습니다. 
	하지만, 확장성을 고려하지 않은 설계가 결국 기술 부채로 돌아 온다는 것을 개인 프로젝트를 하면서 느꼈습니다.
	그래서 CS 공부를 게을리 하지 않아 유튜브에서 미국 대학 수업과 다양한 기술 서적을 항상 읽고 공부하고 있습니다.`;

    const icons = [
        {
            url: 'https://github.com/jinkyumpark',
            icon: githubIcon,
        },
        {
            url: 'https://jinkpark.tistory.com',
            icon: tstoryIcon,
        },
        {
            url: 'https://www.linkedin.com/in/jinkyum-park/',
            icon: linkedinIcon,
        },
    ];
    const portfolios = [
        {
            image: simplyJournal,
            title: 'Simply Journal',
            subtitle: '매일 일기쓰기',
            url: '/portfolio/simply-journal',
        },
        {
            image: springfeed,
            title: 'Springfeed',
            subtitle: '인스타그램을 참고한 SNS',
            url: '/portfolio/springfeed',
        },
    ];
    const techologies = [
        {
            icon: javaIcon,
            name: 'Java',
            features: [
                'Stream을 활용한 함수형 프로그래밍',
                'Collection API와 그 내장함수를 적절하게 활용한 효율적이고 읽기 쉬운 알고리즘 설계',
                'GC 특정을 고려한 메모리 관리',
            ],
        },
        {
            icon: springIcon,
            name: 'Spring Boot',
            features: ['OOP SOLID 원칙을 잘 지킨 REST API 개발'],
        },
        {
            icon: jpaIcon,
            name: 'JPA',
            features: ['DB 특성을 고려한 JPA 활용'],
        },
        {
            icon: springSecurityIcon,
            name: 'Spring Security',
            features: [
                'PasswordEncoder 등을 사용한 Authentication',
                'Authorization',
                'CSRF 등 일반적인 보안위협에 대응',
            ],
        },
    ];

    return (
        <>
            <header class='text-center pt-5 pb-5'>
                <div className='container'>
                    <div class='row justify-content-center'>
                        <img
                            src={profile}
                            alt='jinkyumpark-profile'
                            className='img-responsive rounded-circle mb-4'
                            style={{
                                width: '200px',
                            }}
                        />
                        <h1>{introductionTitle} </h1>
                        <p class='lead col-9'>{introductionSummary}</p>
                    </div>

                    {icons.map((icon) => {
                        return <IconLink url={icon.url} icon={icon.icon} />;
                    })}
                </div>
            </header>

            <section
                class='text-center text-white pt-5 pb-5'
                style={{
                    backgroundColor: 'rgb(26, 188, 156)',
                }}
            >
                <div className='container'>
                    <h1>포트폴리오</h1>
                    <div className='row mt-5'>
                        {portfolios.map((portfolio) => {
                            return (
                                <div className='col-xs-12 col-sm-6 col-xl-4'>
                                    <Portfolio portfolio={portfolio} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section class='text-center pt-5 pb-5'>
                <div className='container'>
                    <h1>기술 스택</h1>

                    <div className='mt-5'>
                        <div className='row'>
                            {techologies.map((technology) => {
                                return (
                                    <div className='col-3'>
                                        <Techonology technology={technology} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section
                class='text-center text-white pt-5 pb-5'
                style={{
                    backgroundColor: 'rgb(26, 188, 156)',
                }}
            >
                <div className='container'>
                    <h1>이력서로 보고 싶으세요?</h1>
                    <div className='row justify-content-center'>
                        <div className='col-12 col-xl-6 mt-3'>
                            <div className='row text-center'>
                                <div className='col-9'>
                                    <h5 className='mt-2 '>
                                        제 이력서가 궁금하시다면 여기서 보실 수
                                        있습니다.
                                    </h5>
                                </div>
                                <div className='col-3'>
                                    <div className='btn btn-light'>
                                        <Link
                                            to='/resume'
                                            className='text-decoration-none text-black'
                                        >
                                            이력서 보러 가기
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const IconLink = ({ url, icon }) => {
    return (
        <a target='_blank' rel='noreferrer' href={url} className='ms-3 me-3'>
            <img
                src={icon}
                alt={`${url}-icon`}
                className='img-responsive rounded-circle'
                style={{
                    width: '40px',
                }}
            />
        </a>
    );
};

const Portfolio = ({ portfolio }) => {
    return (
        <Link to={portfolio.url} className='text-decoration-none text-white'>
            <img
                src={portfolio.image}
                alt={`${portfolio.title} thumbnail`}
                className='rounded'
                style={{
                    width: '400px',
                    height: '300px',
                }}
            />
            <h3 className='mt-3'>{portfolio.title}</h3>
            <h6>{portfolio.subtitle}</h6>
        </Link>
    );
};

const Techonology = ({ technology }) => {
    return (
        <div className='card'>
            <div className='row justify-content-center'>
                <div className='col-6'>
                    <img
                        className='card-img-top img-fluid pt-4'
                        src={technology.icon}
                        alt={`${technology.name}-icon`}
                    />
                </div>
            </div>
            <div className='card-body'>
                <div className='card-title'>
                    <h4>{technology.name}</h4>
                </div>
            </div>

            <div className='list-group list-group-flush'>
                {technology.features.map((feature) => {
                    return <li className='list-group-item'>{feature}</li>;
                })}
            </div>
        </div>
    );
};

export default MainPage;
