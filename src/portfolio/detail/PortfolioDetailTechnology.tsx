import React from 'react'
import { Card } from 'react-bootstrap'
import Portfolio from '../../model/Portfolio'
import Technology from '../../model/Technology'
import TechnologyData from '../../data/TechnologyData'
import styled from 'styled-components';
import { CardTitle } from '../../common/commonStyle'

interface Props {
    portfolio: Portfolio
}

const PortfolioDetailTechnology: React.FC<Props> = ({ portfolio }) => {
    return (
        <CardContainer>
            <Card.Body>
                <CardTitle>사용된 기술</CardTitle>

                <TechnologyContainer>
                    {
                        portfolio.technologyUsed.map((technology) => {
                            return (
                                <SimpleTechnologyIcon technology={TechnologyData.get(technology) ?? TechnologyData.default} />
                            )
                        })
                    }
                </TechnologyContainer>
            </Card.Body>
        </CardContainer>
    )
}

const CardContainer = styled(Card)`
    min-height: 300px;
`;

interface TechnologyProps {
    technology: Technology
}

const SimpleTechnologyIcon: React.FC<TechnologyProps> = ({ technology }) => {
    return (
        <TechnologyIconContainer>
            <Image src={technology.icon} alt="" />
            <Name>{technology.name}</Name>
        </TechnologyIconContainer>
    )
}

const TechnologyIconContainer = styled.div`
    margin: 5px
`;

const TechnologyContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Image = styled.img.attrs({
    className: 'img-fluid'
})`
    width: 25px;
    height: 25px;
`;

const Name = styled.div.attrs({
    className: 'text-secondary clamp-1-line'
})`
    font: 10px;
`;

export default PortfolioDetailTechnology