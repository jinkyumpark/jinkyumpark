import React from 'react'
import { Card } from 'react-bootstrap'
import Portfolio from '../../model/Portfolio'
import { CardTitle } from '../../common/commonStyle'
import styled from 'styled-components';

interface Props {
    portfolio: Portfolio
}

const PortfolioDetailFeaturesCard: React.FC<Props> = ({ portfolio }) => {
    return (
    <CardContainer>
        <Card.Body>
            <CardTitle>주요기능</CardTitle>

            <ul className='text-start'>
                {
                    portfolio.features.map((feature) => {
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

export default PortfolioDetailFeaturesCard