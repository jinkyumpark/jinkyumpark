import React from 'react'
import { Card } from 'react-bootstrap'
import PortfolioCard from '../portfolio/PortfolioCard'
import { RouteSubTitle, RouteTitle } from '../common/RouteStyle'
import { MarginRow } from '../common/commonStyle'
import PortfolioData from '../data/portfolioData'

const PortfolioRoute = () => {
	return (
		<div className='container mt-5 mb-5 text-center'>
			<RouteTitle>포트폴리오</RouteTitle>
			<RouteSubTitle>개발 과정에 (상당히 많이) 참여한 제품들</RouteSubTitle>

			<MarginRow m={40}/>

			<div className='row justify-content-start'>
				{PortfolioData.map((portfolio) => {
					return (
						<div className='col-xs-12 col-lg-6 col-xl-4 mb-4'>
							<Card>
								<Card.Body>
									<PortfolioCard portfolio={portfolio} secondary={true}/>
								</Card.Body>
							</Card>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default PortfolioRoute
