import React from 'react';
import { Link } from 'react-router-dom';

const SimplePortfolioCard = ({ portfolio, textStyle }) => {
    return (
        <Link
            to={portfolio.url}
            className={`text-decoration-none ${textStyle}`}
        >
            <img
                src={portfolio.image}
                alt={`${portfolio.title} thumbnail`}
                className='rounded img-fluid'
            />
            <h3 className='mt-3'>{portfolio.title}</h3>
            <h6>{portfolio.subtitle}</h6>
        </Link>
    );
};

export default SimplePortfolioCard;
