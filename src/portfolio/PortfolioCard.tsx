import React from 'react'
import '../css/hover-effect.css'
import Portfolio from '../model/Portfolio'
import styled from 'styled-components';
import PortfolioStatusBadge from './PortfolioStatusBadge';

interface Props {
	portfolio: Portfolio
	color?: string
}

const PortfolioCard: React.FC<Props> = ({ portfolio, color }) => {
	const portfolioDetailUrl = `portfolio/${portfolio.name.url}`

	return (
		<>
			<PortfolioStatusBadge status={portfolio.status} />

		<Link href={portfolioDetailUrl} color={color}>
			<Image src={portfolio.thumbnailImage} alt={`${portfolio.name.english} thumbnail`} />
			<h3 className='mt-3'>
				{portfolio.name.korean} ({portfolio.participants.length}명)
			</h3>
			<h6>{portfolio.description.short}</h6>
		</Link>
		</>
	)
}

interface LinkProps {
	color?: string
}

const Link = styled.a.attrs<LinkProps>({
	className: ``
})`
	text-decoration: none;
	color: ${props => props.color == null ? 'black' : props.color};
	
	&:hover {
		color: ${props => props.color == null ? 'black' : props.color};
	}
`;

const Image = styled.img.attrs({
	className: 'rounded img-fluid hover-effect',
})``

export default PortfolioCard
