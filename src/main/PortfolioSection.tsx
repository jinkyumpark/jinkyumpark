import React from 'react'
import PortfolioCard from '../portfolio/PortfolioCard'
import styled from 'styled-components';
import Portfolio from '../model/Portfolio';

interface Props {
	portfolios: Portfolio[]
}

const PortfolioSection: React.FC<Props> = ({ portfolios }) => {
	return (
		<Container>
			<div className='container'>
				<h1>포트폴리오</h1>
				<Row>
					{portfolios.map((portfolio) => {
						return (
							<Col>
								<PortfolioCard portfolio={portfolio} color={`white`}/>
							</Col>
						)
					})}
				</Row>
			</div>
		</Container>
	)
}

const Container = styled.section.attrs({
	className: `text-center text-white pt-5 pb-5`,
})`
	background-color: rgb(26, 188, 156);
`

const Row = styled.div.attrs({
	className: `row`,
})`
	justify-content: start;
`

const Col = styled.div.attrs({
	className: `col-xs-12 col-sm-6 col-xl-4 mt-5`,
})``

export default PortfolioSection
