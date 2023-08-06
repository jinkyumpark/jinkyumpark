import React from 'react'
import { Card } from 'react-bootstrap'
import { CardTitle } from '../../common/commonStyle'
import parse from 'html-react-parser'
import Portfolio from '../../model/Portfolio'

interface Props {
    product: Portfolio
}

const ProductDetailDescriptionCard: React.FC<Props> = ({ product }) => {
	return (
		<Card>
			<Card.Body>
				<CardTitle>소개</CardTitle>

				<p>{parse(product.description.long)}</p>
			</Card.Body>
		</Card>
	)
}

export default ProductDetailDescriptionCard