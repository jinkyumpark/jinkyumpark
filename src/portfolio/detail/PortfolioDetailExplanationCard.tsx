import React from 'react'
import styled from 'styled-components';

import Portfolio from '../../model/Portfolio'
import { Card } from 'react-bootstrap';
import { CardTitle } from '../../common/commonStyle';

interface Props {
    portfolio: Portfolio
}

const PortfolioDetailExplanationCard: React.FC<Props> = ({ portfolio }) => {
    return (
        <CardContainer>
            <Card.Body>
                <CardTitle>🗣️ 기술적 설명</CardTitle>

                <ListContainer>
                    {
                        portfolio.explanations.map((explanation) => {
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

export default PortfolioDetailExplanationCard