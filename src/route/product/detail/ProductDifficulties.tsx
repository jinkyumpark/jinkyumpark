import React from 'react'
import styled from 'styled-components';
import parse from 'html-react-parser'
import Product from '../../../model/Product'
import {Card} from 'react-bootstrap';
import {CardTitle} from '../../../common/commonStyle';

const PortfolioDifficultyCard: React.FC<{ product: Product }> = ({product}) => {
    return (
        <CardContainer>
            <Card.Body>
                <CardTitle>😑 어려웠던 점</CardTitle>

                <ListContainer>
                    {
                        product.challenges.map((challenge) => {
                            return <li className='mb-2'>{parse(challenge)}</li>
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

export default PortfolioDifficultyCard