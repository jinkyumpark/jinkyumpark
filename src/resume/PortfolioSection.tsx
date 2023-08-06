import React from 'react'
import { Card } from 'react-bootstrap'
// Components
import PortfolioCard from '../portfolio/PortfolioCard'
import Portfolio from '../model/Portfolio'

interface Props {
	portfolios: Portfolio[]
}

const PortfolioSection: React.FC<Props> = ({ portfolios }) => {
	return (
		<Card className='mb-5'>
			<Card.Body>
				<div className={`row ${(portfolios.length < 3 || portfolios.length % 2 === 0) && 'justify-content-center'}`}>
					<h2 className='mt-4 mb-5'>포트폴리오</h2>
					{portfolios.map((portfolio) => {
						return (
							<div className='col-xs-12 col-sm-6 col-xl-4'>
								<Card className='p-2 mb-3'>
									<PortfolioCard portfolio={portfolio} />
								</Card>
							</div>
						)
					})}
				</div>
			</Card.Body>
		</Card>
	)
}

export default PortfolioSection
