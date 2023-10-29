import React from 'react'
import styled from 'styled-components';
import Portfolio from '../model/Portfolio';
import { CardTitle, MarginRow } from '../common/commonStyle';
import ProductDetailBasicInfo from './detail/ProductDetailBasicInfo';
import { Card } from 'react-bootstrap';
import parse from 'html-react-parser'

interface Props {
    product: Portfolio;
}

const ProductDetailEnglish: React.FC<Props> = ({product}) => {
    return (
        <Container>
            <ProductDetailBasicInfo product={product} />
            <MarginRow m={30} />

            <Card>
                <Card.Body>
				<CardTitle>Introduction</CardTitle>

                    <p>{parse(product.description.long)}</p>
                </Card.Body>
            </Card>
            <MarginRow m={30} />

            <Card>
			<Card.Body>
                    <CardTitle>Functionalities</CardTitle>

				<ul>
					{product.features.map((feature) => {
						return <li>{feature}</li>
					})}
				</ul>
			</Card.Body>
		</Card>
            <MarginRow m={30} />

            <Card>
			<Card.Body>
				<CardTitle>Demo</CardTitle>

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
            <MarginRow m={30} />

            <Card>
			<Card.Body>
				<CardTitle>ETC</CardTitle>

				<ul>
					<li>
						<Link href={`/product/${product.name.url}/privacy`}>Privacy Policy</Link>
					</li>

					<li>
						<Link href={`/portfolio/${product.name.url}`}>Information about Developing (Korean)</Link>
					</li>
				</ul>
			</Card.Body>
		</Card>
            <MarginRow m={30} />
        </Container>
    )
}

const Container = styled.div.attrs({
	className: `container mt-5`,
})``

const Image = styled.img.attrs({
	className: 'img-fluid',
})``

const Link = styled.a`
	text-decoration: none;
	color: rgb(26, 188, 156);

	&:hover {
		color: rgb(26, 188, 156);
	}
`

export default ProductDetailEnglish