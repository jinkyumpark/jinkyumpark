import React from 'react'
import { useParams } from 'react-router';
import Error from '../common/Error';
import styled from 'styled-components';
import { MarginRow } from '../common/commonStyle';
import ProductDetailBasicInfo from './detail/ProductDetailBasicInfo'
import ProductDetailDescriptionCard from './detail/ProductDetailDescriptionCard';
import ProductDetailFeaturesCard from './detail/ProductDetailFeaturesCard';
import ProductDetailDemoCard from './detail/ProductDetailDemoCard';
import ProductDetailEtcCard from './detail/ProductDetailEtcCard';
import Portfolio from '../model/Portfolio';
import PortfolioData from '../data/portfolioData';

const ProductDetail = () => {
    const { productName } = useParams()
    const { language } = useParams()

    const errorMessage = {
		main: '해당 제품을 찾을 수 없어요',
		sub: `
            URL을 다시 확인하거나 출시된 제품인지 확인해 주세요. 
            <br/>
            아직 정식 출시되지 않은 제품은 포트폴리오에서 확인해 주세요.
        `,
	}

    const [product, setProduct] = React.useState<Portfolio | null>(null)
    React.useEffect(() => {
        const productCandidate = PortfolioData.filter((p) => p.name.url.toUpperCase() === productName?.toUpperCase())

        if (productCandidate.length !== 0) {
            setProduct(productCandidate[0])
            if (language?.toUpperCase() == 'KOREAN') {
                document.title = `${productCandidate[0].name.korean ?? '오류'} | ${productCandidate[0].description.short}`
            } else if (language?.toUpperCase() == 'JAPANESE') {

            } else {
                document.title = `${productCandidate[0].name.english ?? 'ERROR'} | ${productCandidate[0].description.short}`
            }


        }
    }, [productName])

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

export default ProductDetail