import React from 'react'
import { Card } from 'react-bootstrap'
import { CardTitle } from '../../common/commonStyle'
import styled from 'styled-components';
import Portfolio from '../../model/Portfolio';

interface Props {
    product: Portfolio
}

const ProductDetailDemoCard: React.FC<Props> = ({ product }) => {
	return (
		<Card>
			<Card.Body>
				<CardTitle>시연 이미지</CardTitle>

				<div className='row justify-content-center'>
						{product.demoImages.map((image) => {
                            return (
								<div className='col-12 col-md-8'>
									<Image src={image} alt='' className='rounded'/>
								</div>
							)
						})}
				</div>
			</Card.Body>
		</Card>
	)
}

const Image = styled.img.attrs({
	className: 'img-fluid',
})``

export default ProductDetailDemoCard