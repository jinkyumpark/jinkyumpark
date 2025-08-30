import React from 'react'
import styled from 'styled-components';
import {PORTFOLIO_STATUS_COLOR, PORTFOLIO_STATUS_LABEL} from '../../data/PortfolioStatusData';
import ProductStatus from "../../model/ProductStatus";

const ProductStatusBadge: React.FC<{ status: ProductStatus }> = ({status}) => {
    return <Container
        color={PORTFOLIO_STATUS_COLOR.get(status) ?? 'black'}>{PORTFOLIO_STATUS_LABEL.get(status)}</Container>
}

const Container = styled.div.attrs<{ color: string }>({
    className: 'rounded'
})`
    position: absolute;

    background-color: ${props => props.color};
    color: white;

    padding: 10px;
    margin-top: 5px;
    margin-left: 5px;

    width: 100px;

    z-index: 10;
`

export default ProductStatusBadge