import React from 'react'
import styled from 'styled-components';
import PortfolioStatus from '../model/PortfolioStatus';
import { PORTFOLIO_STATUS_COLOR, PORTFOLIO_STATUS_LABEL } from '../data/PortfolioStatusData';

interface Props {
    status: PortfolioStatus
}

const PortfolioStatusBadge: React.FC<Props> = ({ status }) => {
	return <Container color={PORTFOLIO_STATUS_COLOR.get(status) ?? 'black'}>{PORTFOLIO_STATUS_LABEL.get(status)}</Container>
}

interface ContainerProps {
    color: string
}

const Container = styled.div.attrs<ContainerProps>({
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

export default PortfolioStatusBadge