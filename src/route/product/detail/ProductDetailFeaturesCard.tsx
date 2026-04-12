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
                                <ListItem>{feature}</ListItem>
                            )
                        })
                    }
                </ul>
            </Card.Body>
        </CardContainer>
    )
}

const CardContainer = styled(Card)`
    height: 100%;
    padding: 10px;
`;

const ListItem = styled.li`
    margin-bottom: 8px;
    line-height: 1.6;
`;

export default ProductDetailFeaturesCard