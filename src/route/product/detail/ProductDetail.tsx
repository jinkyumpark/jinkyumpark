import React, {useEffect} from 'react'
import {useParams} from 'react-router';
import styled from 'styled-components';
import Product from "../../../model/Product";
import PortfolioData from "../../../data/portfolioData";
import Error from '../../../common/Error'
import PrivacyPolicy from "../../../data/privacyPolicy";
import {MarginRow} from "../../../common/commonStyle";
import ProductDetailBasicInfoCard from "./ProductDetailBasicInfoCard";
import ProductDetailFeaturesCard from "./ProductDetailFeaturesCard";
import ProductDetailTechnology from "./ProductDetailTechnology";
import ProductDetailExplanationCard from "./ProductDetailExplanationCard";
import ProductDetailEtcCard from "./ProductDetailEtcCard";
import ProductDetailLanguageCard from "./ProductDetailLanguageCard";
import PortfolioDifficultyCard from "./ProductDifficulties";
import Footer from "../../../common/Footer";

const ProductDetail = () => {
    const {productName} = useParams()
    const {language} = useParams()

    const errorMessage = {
        main: `해당 제품을 찾을 수 없어요`,
        sub: `URL을 다시 확인하거나 있는 제품인지 다시 확인해 주세요.`,
    }

    const [product, setProduct] = React.useState<Product | null>(null)
    useEffect(() => {
        const productCandidate = PortfolioData.filter((p) => p.name.url.toUpperCase() === productName?.toUpperCase())

        if (productCandidate.length !== 0) {
            setProduct(productCandidate[0])
            if (language?.toUpperCase() == 'KOREAN') {
                document.title = `${productCandidate[0].name.korean ?? '오류'} | ${productCandidate[0].description.short}`
            } else if (language?.toUpperCase() == 'JAPANESE') {
            } else {
                document.title = `${productCandidate[0].name.english ?? 'ERROR'}`
            }
        }
    }, [productName])

    if (product === null) {
        return <Error message={errorMessage} mt={100}/>
    }

    return (
        <Container>
            <Row>
                <FullContainer>
                    <img src={product.detailImage} alt={`${product.name}`} className='img-fluid rounded border w-100'/>
                </FullContainer>
                <MarginRow m={5}/>

                <FullContainer>
                    <ProductDetailBasicInfoCard product={product}/>
                </FullContainer>
                <MarginRow m={5}/>

                {(product.features.length > 0 || product.technologyUsed.length > 0) && <>
                    <>
                        {product.features.length > 0 &&
                            <HalfContainer>
                                <ProductDetailFeaturesCard product={product}/>
                            </HalfContainer>
                        }

                        {product.technologyUsed.length > 0 &&
                            <HalfContainer>
                                <ProductDetailTechnology product={product}/>
                            </HalfContainer>
                        }
                    </>
                    <MarginRow m={5}/>
                </>}

                {product.explanations.length > 0 && <>
                    <FullContainer>
                        <ProductDetailExplanationCard product={product}/>
                    </FullContainer>
                    <MarginRow m={5}/>
                </>}

                {product.challenges.length > 0 && <>
                    <FullContainer>
                        <PortfolioDifficultyCard product={product}/>
                    </FullContainer>
                    <MarginRow m={5}/>
                </>}

                {PrivacyPolicy.has(product.name.url.toUpperCase()) && <>
                    <FullContainer>
                        <ProductDetailEtcCard product={product}/>
                    </FullContainer>
                    <MarginRow m={5}/>
                </>}

                <MarginRow m={20}/>
            </Row>

            <Footer compact/>
        </Container>
    )
}

const Container = styled.div.attrs({
    className: `container mt-5`,
})``

const Row = styled.div.attrs({
    className: `row row-eq-height`,
})``;

const FullContainer = styled.div.attrs({
    className: `col-12 mt-4`
})``;

const HalfContainer = styled.div.attrs({
    className: `col-xs-12 col-lg-6 mt-4`
})``;

export default ProductDetail