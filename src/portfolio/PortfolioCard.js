import React from 'react';
import { technologies } from '../data/technologyData';
import { Card } from 'react-bootstrap';

const PortfolioCard = ({ portfolio, textStyle }) => {
    return (
        <a href={portfolio.url} className={`text-decoration-none ${textStyle}`}>
            <img
                src={portfolio.image}
                alt={`${portfolio.title} thumbnail`}
                className='rounded img-fluid'
            />

            <h3 className='mt-3'>{portfolio.title}</h3>
            <h6>{portfolio.subtitle}</h6>

            {/* <div className='row justify-content-center mt-4'>
                {portfolio.technologiesUsed
                    .map((id) => technologies[id])
                    .map((tech) => {
                        return (
                            tech !== null &&
                            tech !== undefined && (
                                <div className='col-xs-4 col-lg-3'>
                                    <Card className='mt-3 text-center'>
                                        <Card.Img
                                            src={tech.icon}
                                            className='img-fluid round'
                                        />
                                    </Card>
                                </div>
                            )
                        );
                    })}
            </div> */}
        </a>
    );
};

export default PortfolioCard;
