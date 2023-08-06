import React from 'react'
import ProductCard from './ProductCard'
import styled from 'styled-components';
import { RouteTitle, RouteSubTitle } from '../common/RouteStyle'
import PortfolioData from '../data/portfolioData';
import PortfolioStatus from '../model/PortfolioStatus';

const ProductRoute = () => {
    return (
		<Container>
			<RouteTitle>출시 제품</RouteTitle>
			<RouteSubTitle>실제로 출시되어 서비스되고 있는 제품들입니다</RouteSubTitle>

			<Divider />

			<Row>
				{PortfolioData
					.filter((portfolio) => portfolio.status === PortfolioStatus.PRODUCTION)
					.map((product) => {
						return <ProductCard product={product} />
					})}
			</Row>
		</Container>
	)
}

const Container = styled.div.attrs({
	className: 'container mt-5 mb-5 text-center'
})`
`;

const Divider = styled.div.attrs({
	className: 'mb-5',
})``

const Row = styled.div.attrs({
	className: 'row container',
})`
	justify-content: center;
	margin: 0px;
`

export default ProductRoute