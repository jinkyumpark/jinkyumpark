import React from 'react'
import {Card} from 'react-bootstrap'
import Product from '../../../model/Product'
import Technology from '../../../model/Technology'
import styled from 'styled-components';
import {CardTitle} from '../../../common/commonStyle'

const ProductDetailTechnology: React.FC<{ product: Product }> = ({product}) => {
    return (
        <CardContainer>
            <Card.Body>
                <CardTitle>🤖 사용된 기술</CardTitle>

                <TechnologyContainer>
                    {
                        product.technologyUsed.map((technology) => {
                            return (
                                <SimpleTechnologyIcon technology={technology}/>
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

const SimpleTechnologyIcon: React.FC<{ technology: Technology }> = ({technology}) => {
    return (
        <TechnologyIconContainer>
            <Image src={technology.icon} alt=""/>
            <Name>{technology.name}</Name>
        </TechnologyIconContainer>
    )
}

const TechnologyIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8px;
    width: 50px;
`;

const TechnologyContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

const Image = styled.img.attrs({
    className: 'img-fluid'
})`
    width: 30px;
    height: 30px;
`;

const Name = styled.div.attrs({
    className: 'text-secondary clamp-1-line'
})`
    font-size: 12px;
    margin-top: 4px;
    text-align: center;
`;

export default ProductDetailTechnology