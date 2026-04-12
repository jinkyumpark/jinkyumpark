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
                                <ListItem>{explanation}</ListItem>
                            )
                        })
                    }
                </ListContainer>
            </Card.Body>
        </CardContainer>
    )
}

const CardContainer = styled(Card)`
    padding: 10px;
`;

const ListContainer = styled.ul`
    text-align: left;
    padding-left: 20px;
`;

const ListItem = styled.li`
    margin-bottom: 10px;
    line-height: 1.6;
`;

export default ProductDetailExplanationCard