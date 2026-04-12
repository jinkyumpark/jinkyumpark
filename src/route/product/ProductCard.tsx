import React from 'react'
import styled from 'styled-components';
import ProductStatusBadge from './ProductStatusBadge';
import Product from "../../model/Product";

interface Props {
    product: Product
    color?: string
    secondary?: boolean
}

const ProductCard: React.FC<Props> = ({product, color, secondary = false}) => {
    const portfolioDetailUrl = `products/${product.name.url}`
    const externalLinks = product.link.filter((l) => !l.link.includes('github.com'))

    return (
        <>
            <ProductStatusBadge status={product.status}/>

            <Link href={portfolioDetailUrl} color={color}>
                <ThumbnailWrapper>
                    <Image src={product.thumbnailImage} alt={`${product.name.english} thumbnail`}/>
                    {externalLinks.length > 0 && (
                        <LinkOverlay onClick={(e) => e.stopPropagation()}>
                            {externalLinks.map((link) => (
                                <LinkIcon
                                    key={link.link}
                                    href={link.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <LinkIconImage src={link.icon} alt="" />
                                </LinkIcon>
                            ))}
                        </LinkOverlay>
                    )}
                </ThumbnailWrapper>

                <h3 className='mt-3 d-flex justify-content-center force-1-line'>
                    <img src={product.icon}
                         alt={'icon'}
                         style={{width: '30px', height: '30px'}}
                         className={'rounded me-2'}
                    />

                    {product.name.korean} ({product.participants.length}명)
                </h3>

                <h6 className={secondary ? 'text-secondary' : ''}>{product.description.short}</h6>
            </Link>
        </>
    )
}

const Link = styled.a.attrs<{ color?: string }>({})`
    text-decoration: none;
    color: ${props => props.color == null ? 'var(--text-primary)' : props.color};

    &:hover {
        color: ${props => props.color == null ? 'var(--text-primary)' : props.color};
    }
`;

const ThumbnailWrapper = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
`;

const Image = styled.img.attrs({
    className: 'rounded img-fluid hover-effect',
})`
    min-height: 200px;
    width: 100%;
`

const LinkOverlay = styled.div`
    position: absolute;
    bottom: 8px;
    right: 8px;
    display: flex;
    gap: 6px;
`;

const LinkIcon = styled.a.attrs({
    className: 'link-hover-effect',
})`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--link-overlay-bg);
    box-shadow: 0 2px 8px var(--link-overlay-shadow);

    @media (max-width: 768px) {
        width: 56px;
        height: 56px;
    }
`;

const LinkIconImage = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;

    @media (max-width: 768px) {
        width: 36px;
        height: 36px;
    }
`;

export default ProductCard
