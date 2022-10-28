import React from 'react';
import { portfolioUrl } from '../data/url';
import '../css/hover-effect.css';
import { Badge } from 'react-bootstrap';

const PortfolioCard = ({ portfolio, textStyle }) => {
    const portfolioDetailUrl = `${portfolioUrl}/${portfolio.name}`;

    return (
        <a
            href={portfolioDetailUrl}
            className={`text-decoration-none ${textStyle}`}
        >
            <h3>
                <Badge
                    bg={portfolio.status.style}
                    style={{
                        position: 'absolute',
                        right: '-5%',
                        top: '-3%',
                    }}
                >
                    {portfolio.status.name}
                </Badge>
            </h3>

            <img
                src={portfolio.image}
                alt={`${portfolio.title} thumbnail`}
                className='rounded img-fluid hover-effect'
            />
            <h3 className='mt-3'>{portfolio.title}</h3>
            <h6>{portfolio.subtitle}</h6>
        </a>
    );
};

export default PortfolioCard;
