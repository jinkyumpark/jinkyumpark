import React from 'react'
import styled from 'styled-components';
import parse from 'html-react-parser'

import Portfolio from '../../model/Portfolio'
import { Card } from 'react-bootstrap';
import { CardTitle } from '../../common/commonStyle';

interface Props {
    portfolio: Portfolio
}

const PortfolioDifficultyCard: React.FC<Props> = ({ portfolio }) => {
    return (
        <CardContainer>
            <Card.Body>
                <CardTitle>😑 어려웠던 점</CardTitle>

                <ListContainer>
                    {
                        portfolio.challenges.map((challenge) => {
                            return <li>{parse(challenge)}</li>
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