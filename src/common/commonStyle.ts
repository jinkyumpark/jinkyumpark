import styled from 'styled-components';

interface MarginProps {
    m?: number
}

const MarginRow = styled.div<MarginProps>`
	margin-top: ${(props) => props.m ?? 20}px;
	margin-bottom: ${(props) => props.m ?? 20}px;
`

const MarginCol = styled.div<MarginProps>`
	margin-left: ${(props) => props.m ?? 20}px;
	margin-right: ${(props) => props.m ?? 20}px;
`;

const FlexSpacer = styled.div`
    flex: 1;
`;

const CardTitle = styled.h3`
	margin-bottom: 20px;
`;

export { MarginRow, MarginCol, FlexSpacer, CardTitle }