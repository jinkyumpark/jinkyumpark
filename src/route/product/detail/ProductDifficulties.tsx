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
                            return <ListItem>{parse(challenge)}</ListItem>
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

export default PortfolioDifficultyCard