import React from 'react'
import {Card} from 'react-bootstrap'
import ProductCard from "../product/ProductCard";
import {RouteSubTitle, RouteTitle} from "../../common/RouteStyle";
import {MarginRow} from "../../common/commonStyle";
import portfolioData from "../../data/portfolioData";

const ProductRoute = () => {
    return (
        <div className='container mt-5 mb-5 text-center'>
            <RouteTitle>제품</RouteTitle>
            <RouteSubTitle>서비스 중이거나 포기한 제품들</RouteSubTitle>

            <MarginRow m={40}/>

            <div className='row justify-content-start'>
                {portfolioData.map((product) => {
                    return (
                        <div className='col-xs-12 col-lg-6 col-xl-4 mb-4'>
                            <Card>
                                <Card.Body>
                                    <ProductCard product={product} secondary={true}/>
                                </Card.Body>
                            </Card>
                            <MarginRow m={20}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductRoute
