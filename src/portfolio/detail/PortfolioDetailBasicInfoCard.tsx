import React from 'react'
import Portfolio from '../../model/Portfolio'
import { Card } from 'react-bootstrap'
import WebsiteLink from '../../common/WebsiteLink'
import styled from 'styled-components';
import parser from 'html-react-parser'
import breakpoints from '../../common/breakpoints';

interface Props {
    portfolio: Portfolio
}

const PortfolioDetailBasicInfoCard: React.FC<Props> = ({ portfolio }) => {
	return (
		<CardContainer>
			<Card.Body>
				<NameContainer>
					<Logo src={portfolio.icon}></Logo>
					<KoreanName>{portfolio.name.korean}</KoreanName>
					<EnglishName>{portfolio.name.english}</EnglishName>
				</NameContainer>

				<h5 className='text-muted'>{portfolio.description.short}</h5>

				<DescriptionContainer>
					<Description>
						<p className='mt-3'>{parser(portfolio.description.long)}</p>
					</Description>
				</DescriptionContainer>

				<LinkContainer>
					{portfolio.link.map((link) => [<WebsiteLink link={link.link} icon={link.icon} border={link.border} />])}
				</LinkContainer>
			</Card.Body>
		</CardContainer>
	)
}

const CardContainer = styled(Card)`
	min-height: 300px;
	display: flex;
	padding-bottom: 50px;
`;

const NameContainer = styled.div.attrs({
	className: 'mt-xl-4',
})`
	display: flex;
	justify-content: center;

	padding-bottom: 5px;
`

const Logo = styled.img.attrs({
	className: `img-fluid rounded`
})`
	width: 40px;
	height: 40px;

	margin-right: 10px;
`;

const KoreanName = styled.h2`

`;

const EnglishName = styled.h4.attrs({
    className: 'text-secondary'
})`
    margin-left: 5px;

	margin-top: auto;
`;

const LinkContainer = styled.div.attrs({
	className: ''
})`
	display: flex;
	justify-content: center;
	
	position: absolute;
	bottom: 20px;
	width: 100%;
`;

const DescriptionContainer = styled.div`
	display: flex;
	justify-content: center;
	text-align: left;
`;

const Description = styled.div.attrs({
	className: ''
})`
	@media screen and (min-width: ${breakpoints.md}){
		width: 60%;
	}
`;

export default PortfolioDetailBasicInfoCard