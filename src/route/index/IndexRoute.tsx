import React from 'react'
import IntroductionSection from './sections/IntroductionSection'
import PortfolioSection from './sections/PortfolioSection'
import Footer from "../../common/Footer";
import PortfolioData from "../../data/portfolioData";
import {profile} from "../../data/profile";
import {channels} from "../../data/channels";

const IndexRoute = () => {
    return (
        <>
            <IntroductionSection introduction={profile} websites={channels}/>
            <PortfolioSection products={PortfolioData}/>
            <div className="container">
                <Footer compact/>
            </div>
        </>
    )
}

export default IndexRoute
