import React from 'react'
import { Card } from 'react-bootstrap'
import { CardTitle } from '../../common/commonStyle'
import styled from 'styled-components';
import Portfolio from '../../model/Portfolio';

interface Props {
    product: Portfolio
}

const ProductDetailEtcCard: React.FC<Props> = ({ product }) => {
	return (
		<Card>
			<Card.Body>
				<CardTitle>기타</CardTitle>

				<ul>
					<li>
						<Link href={`/product/${product.name.english}/privacy`}>개인정보처리방침</Link>
					</li>

					<li>
						<Link href={`/portfolio/${product.name.english}`}>개발 관련 정보</Link>
					</li>
				</ul>
			</Card.Body>
		</Card>
	)
}

const Link = styled.a`
	text-decoration: none;
	color: rgb(26, 188, 156);

	&:hover {
		color: rgb(26, 188, 156);
	}
`

export default ProductDetailEtcCard