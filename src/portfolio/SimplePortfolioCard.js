import React from 'react';

const SimplePortfolioCard = ({ portfolio, textStyle }) => {
    return (
        <a href={portfolio.url} className={`text-decoration-none ${textStyle}`}>
            <img
                src={portfolio.image}
                alt={`${portfolio.title} thumbnail`}
                className='rounded img-fluid'
            />
            <h3 className='mt-3'>{portfolio.title}</h3>
            <h6>{portfolio.subtitle}</h6>
        </a>
    );
};

export default SimplePortfolioCard;
