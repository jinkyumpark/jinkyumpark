import React from 'react'
import styled from 'styled-components';

import Product from '../../../model/Product'
import {Card} from 'react-bootstrap';
import {CardTitle} from '../../../common/commonStyle';

const ProductDetailExplanationCard: React.FC<{ product: Product }> = ({product}) => {
    return (
        <CardContainer>
            <Card.Body>
                <CardTitle>🗣️ 기술적 설명</CardTitle>

                <ListContainer>
                    {
                        product.explanations.map((explanation) => {
                            return (
                                <li>{explanation}</li>
                            )
                        })
                    }
                </ListContainer>
            </Card.Body>
        </CardContainer>
    )
}

const CardContainer = styled(Card)`
    min-height: 300px;
`;

const ListContainer = styled.ul`
    text-align: left;
`;

export default ProductDetailExplanationCard