import React from 'react'
import styled from 'styled-components';
import Portfolio from '../model/Portfolio';
import Error from '../common/Error';
import { MarginRow } from '../common/commonStyle';
import ProductDetailBasicInfo from './detail/ProductDetailBasicInfo';
import ProductDetailDescriptionCard from './detail/ProductDetailDescriptionCard';
import ProductDetailFeaturesCard from './detail/ProductDetailFeaturesCard';
import ProductDetailDemoCard from './detail/ProductDetailDemoCard';
import ProductDetailEtcCard from './detail/ProductDetailEtcCard';

interface Props {
    product: Portfolio;
}

const ProductDetailKorean: React.FC<Props> = ({product}) => {
    const errorMessage = {
        main: '해당 제품을 찾을 수 없어요',
        sub: `
            URL을 다시 확인하거나 출시된 제품인지 확인해 주세요. 
            <br/>
            아직 정식 출시되지 않은 제품은 포트폴리오에서 확인해 주세요.
        `,
    }

    if (product === null) {
        return <Error message={errorMessage} mt={100}/>
    }

    return (
        <Container>
            <ProductDetailBasicInfo product={product} />
            <MarginRow m={30} />

            <ProductDetailDescriptionCard product={product} />
            <MarginRow m={30} />

            <ProductDetailFeaturesCard product={product} />
            <MarginRow m={30} />

            <ProductDetailDemoCard product={product} />
            <MarginRow m={30} />

            <ProductDetailEtcCard product={product} />
            <MarginRow m={30} />
        </Container>
    )
}

const Container = styled.div.attrs({
	className: `container mt-5`,
})``

export default ProductDetailKorean