import React from 'react'
import { Card } from 'react-bootstrap'
import { CardTitle } from '../../common/commonStyle'
import Portfolio from '../../model/Portfolio'

interface Props {
    product: Portfolio
}

const ProductDetailFeaturesCard: React.FC<Props> = ({ product }) => {
	return (
		<Card>
			<Card.Body>
				<CardTitle>기능</CardTitle>

				<ul>
					{product.features.map((feature) => {
						return <li>{feature}</li>
					})}
				</ul>
			</Card.Body>
		</Card>
	)
}

export default ProductDetailFeaturesCard