import React from 'react'
import {Card} from 'react-bootstrap'
import Product from '../../../model/Product'
import {CardTitle} from '../../../common/commonStyle'
import styled from 'styled-components';

const ProductDetailFeaturesCard: React.FC<{ product: Product }> = ({product}) => {
    return (
        <CardContainer>
            <Card.Body>
                <CardTitle>⚙️ 주요기능</CardTitle>

                <ul className='text-start'>
                    {
                        product.features.map((feature) => {
                            return (
                                <li>{feature}</li>
                            )
                        })
                    }
                </ul>
            </Card.Body>
        </CardContainer>
    )
}

const CardContainer = styled(Card)`
    min-height: 300px;
`;

export default ProductDetailFeaturesCard