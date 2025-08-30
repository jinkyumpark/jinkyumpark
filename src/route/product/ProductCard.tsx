import React from 'react'
import styled from 'styled-components';
import ProductStatusBadge from './ProductStatusBadge';
import Product from "../../model/Product";
import WebsiteLink from "../../common/WebsiteLink";

interface Props {
    product: Product
    color?: string
    secondary?: boolean
}

const ProductCard: React.FC<Props> = ({product, color, secondary = false}) => {
    const portfolioDetailUrl = `products/${product.name.url}`

    return (
        <>
            <ProductStatusBadge status={product.status}/>

            <Link href={portfolioDetailUrl} color={color}>
                <Image src={product.thumbnailImage} alt={`${product.name.english} thumbnail`}/>

                <h3 className='mt-3 d-flex justify-content-center force-1-line'>
                    <img src={product.icon}
                         alt={'icon'}
                         style={{width: '30px', height: '30px'}}
                         className={'rounded me-2'}
                    />

                    {product.name.korean}
                    ({product.participants.length}명)
                </h3>

                <h6 className={secondary ? 'text-secondary' : ''}>{product.description.short}</h6>

                {
                    secondary &&
                    <>
                        <div className={'mt-4'}/>
                        <WebsiteLinkContainer>
                            {product.link.map((link) => <WebsiteLink link={link.link} icon={link.icon} border={link.border}/>)}
                        </WebsiteLinkContainer>
                    </>
                }
            </Link>
        </>
    )
}

const Link = styled.a.attrs<{ color?: string }>({})`
    text-decoration: none;
    color: ${props => props.color == null ? 'black' : props.color};

    &:hover {
        color: ${props => props.color == null ? 'black' : props.color};
    }
`;

const Image = styled.img.attrs({
    className: 'rounded img-fluid hover-effect',
})`
    min-height: 200px;
`

const WebsiteLinkContainer = styled.div`
    display: flex;
    justify-content: end;

    margin-right: 10px;
    margin-left: 10px;
`

export default ProductCard
