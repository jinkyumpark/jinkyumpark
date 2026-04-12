import React from 'react'
import styled from 'styled-components';
import Product from "../../../model/Product";
import ProductCard from "../../product/ProductCard";

const PortfolioSection: React.FC<{ products: Product[] }> = ({products}) => {
    return (
        <Container>
            <div className='container'>
                <h1>제품 (포트폴리오)</h1>
                <Row>
                    {products.slice(0, 6).map((portfolio) => {
                        return (
                            <Col>
                                <ProductCard product={portfolio} color={`white`}/>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </Container>
    )
}

const Container = styled.section.attrs({
    className: `text-center text-white pt-5 pb-5`,
})`
    background-color: #373737;
`

const Row = styled.div.attrs({
    className: `row`,
})`
    justify-content: start;
`

const Col = styled.div.attrs({
    className: `col-xs-12 col-sm-6 col-xl-4 mt-5`,
})``

export default PortfolioSection
