import React from 'react'
import Product from "../../../model/Product";
import {Card} from "react-bootstrap";
import {CardTitle} from "../../../common/commonStyle";
import styled from "styled-components";

const ProductDetailLanguageCard: React.FC<{ product: Product }> = ({product}) => {
    return (
        <Card>
            <Card.Body>
                <CardTitle>다른 언어로 보기</CardTitle>

                <ul>
                    <li>
                        <Link href={`/products/${product.name.url}?language=english`}>English</Link>
                    </li>

                    <li>
                        <Link href={`/products/${product.name.url}?language=japanese`}>日本語</Link>
                    </li>
                </ul>
            </Card.Body>
        </Card>
    )
}

const Link = styled.a`
    text-decoration: none;
    color: rgb(26, 188, 156);

    &:hover {
        color: rgb(26, 188, 156);
    }
`

export default ProductDetailLanguageCard
