import React from 'react'
import {Card} from 'react-bootstrap'
import styled from 'styled-components';
import parser from 'html-react-parser'
import breakpoints from "../../../common/breakpoints";
import Product from "../../../model/Product";
import WebsiteLink from "../../../common/WebsiteLink";
import {MarginRow} from "../../../common/commonStyle";

const ProductDetailBasicInfoCard: React.FC<{ product: Product }> = ({product}) => {
    return (
        <CardContainer>
            <Card.Body>
                <NameContainer>
                    <Logo src={product.icon}></Logo>
                    <KoreanName>{product.name.korean}</KoreanName>
                    <EnglishName>{product.name.english}</EnglishName>
                </NameContainer>

                <h5 className='text-muted text-center'>{product.description.short}</h5>

                <MarginRow m={30}/>

                <DescriptionContainer>
                    <Description>
                        <p className='mt-3'>{parser(product.description.long)}</p>
                    </Description>
                </DescriptionContainer>

                <MarginRow m={30}/>

                <LinkContainer>
                    {product.link.map((link) => [<WebsiteLink link={link.link} icon={link.icon}
                                                              border={link.border}/>])}
                </LinkContainer>
            </Card.Body>
        </CardContainer>
    )
}

const CardContainer = styled(Card)`
    min-height: 300px;
    display: flex;
    padding-bottom: 50px;
`;

const NameContainer = styled.div.attrs({
    className: 'mt-xl-4',
})`
    display: flex;
    justify-content: center;

    padding-bottom: 5px;
`

const Logo = styled.img.attrs({
    className: `img-fluid rounded`
})`
    width: 40px;
    height: 40px;

    margin-right: 10px;
`;

const KoreanName = styled.h2`

`;

const EnglishName = styled.h4.attrs({
    className: 'text-secondary'
})`
    margin-left: 5px;

    margin-top: auto;
`;

const LinkContainer = styled.div`
    position: absolute;
    bottom: 20px;
    right: 20px;
`;

const DescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`;

const Description = styled.div`
    @media screen and (min-width: ${breakpoints.md}) {
        width: 60%;
    }
`;

export default ProductDetailBasicInfoCard