import React from 'react'
import { portfolioUrl } from '../data/url'
import '../css/hover-effect.css'

const PortfolioCard = ({ portfolio, textStyle }) => {
	const portfolioDetailUrl = `${portfolioUrl}/${portfolio.name}`

	return (
		<a href={portfolioDetailUrl} className={`text-decoration-none ${textStyle}`}>
			<img src={portfolio.image} alt={`${portfolio.title} thumbnail`} className='rounded img-fluid hover-effect' />
			<h3 className='mt-3'>{portfolio.title}</h3>
			<h6>{portfolio.subtitle}</h6>
		</a>
	)
}

export default PortfolioCard
