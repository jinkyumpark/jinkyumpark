import React from 'react'
import Portfolio from '../../model/Portfolio'
import { Card } from 'react-bootstrap'
import styled from 'styled-components';
import { CardTitle } from '../../common/commonStyle';

interface Props {
    portfolio: Portfolio
}

const PortfolioDbCard: React.FC<Props> = ({ portfolio }) => {
    return (
        <CardContainer>
            <Card.Body>
                <CardTitle>💾 DB 설계</CardTitle>

                <ImageContainer>
                    {
                        portfolio.db.images.map((image) => {
                            return <Image src={image} />
                        })
                    }
                </ImageContainer>

                <ListContainer>
                    {
                        portfolio.db.explanations.map((explanation) => {
                            return <li>{explanation}</li>
                        })
                    }
                </ListContainer>
            </Card.Body>
        </CardContainer>
    )
}

const CardContainer = styled(Card).attrs({
    className: ``
})`
    min-height: 300px;
`;

const ImageContainer = styled.div.attrs({
    className: 'row'
})`
    justify-content: center;
    margin-bottom: 30px;
`;

const Image = styled.img.attrs({
    className: 'img-fluid col-12 col-md-6'
})``

const ListContainer = styled.ul`
    text-align: left;
`;

export default PortfolioDbCard