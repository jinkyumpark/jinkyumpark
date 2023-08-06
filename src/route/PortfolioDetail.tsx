import React from 'react'
import { useParams } from 'react-router'
import Error from '../common/Error'
import '../css/hover-effect.css'
import Portfolio from '../model/Portfolio'
import PortfolioData from '../data/portfolioData'
import PortfolioDetailBasicInfoCard from '../portfolio/detail/PortfolioDetailBasicInfoCard'
import PortfolioDetailFeatureCard from '../portfolio/detail/PortfolioDetailFeatureCard'
import PortfolioDetailFeaturesCard from '../portfolio/detail/PortfolioDetailFeaturesCard'
import PortfolioDetailTechnology from '../portfolio/detail/PortfolioDetailTechnology'

const PortfolioDetail = () => {
	const { portfolioName } = useParams()
	const [portfolio, setPortfolio] = React.useState<Portfolio | null>(null)
	React.useEffect(() => {
		const portfolioArray = PortfolioData.filter((portfolio) => {
			return portfolio.name.url === portfolioName?.toLowerCase()
		})

		if (portfolioArray.length !== 0) {
			setPortfolio(portfolioArray[0])
		}
	}, [portfolioName])


	const errorMessage = {
		main: `${portfolioName}이라는 포트폴리오를 찾을 수 없어요`,
		sub: `다시 한 번 확인해 주세요`
	}

	return (
		<div className='container text-center'>
			{portfolio === null || typeof portfolio === 'undefined' ? (
				<Error message={errorMessage} />
			) : (
				<div className='container mb-5'>
					<div className='row row-eq-height row-eq-height'>
						<div className='col-12 mt-5'>
							<img src={portfolio.thumbnailImage} alt={`${portfolio.name}`} className='img-fluid rounded border' />
						</div>

						<div className='col-12 mt-5'>
							<PortfolioDetailBasicInfoCard portfolio={portfolio} />
						</div>

						<div className='col-xs-12 col-lg-6 mt-5'>
							<PortfolioDetailFeaturesCard portfolio={portfolio} />
						</div>

						<div className='col-xs-12 col-lg-6 mt-5'>
								<PortfolioDetailTechnology portfolio={portfolio} />
						</div>

						{/* 
						<div className='col-xs-12 col-lg-6 mt-5'>
							<ListCard title='어려웠던 점' list={portfolio.difficulties} />
						</div>

						<div className='col-12 mt-5'>
							<DatabaseCard portfolio={portfolio} />
						</div> */}
					</div>
				</div>
			)}
		</div>
	)
}

// const DatabaseCard = ({ portfolio }) => {
// 	return (
// 		<Card className='h-100'>
// 			<Card.Body>
// 				<h3>Database</h3>

// 				<div className='row justify-content-center mt-4'>
// 					{portfolio.db.used == null ? (
// 						<Error mainErrorMessage='DB 관련 정보가 없어요' />
// 					) : (
// 						portfolio.db.used
// 							.map((db) => technologies.db.find((tech) => tech.id === db))
// 							.map((db) => {
// 								return (
// 									<div className='col-6 col-lg-3 mb-3'>
// 										<TechIcon technology={db} />
// 									</div>
// 								)
// 							})
// 					)}
// 				</div>

// 				{portfolio.db.erDiagram != null && (
// 					<>
// 						<h4 className='text-muted mt-4 mb-3'>ER Diagram</h4>
// 						<img src={portfolio.db.erDiagram} alt='springfeed-er-diagram' className='img-fluid border hover-effect' />
// 					</>
// 				)}
// 			</Card.Body>
// 		</Card>
// 	)
// }

// const Challenge = ({ challenges }) => {
// 	return (
// 		<Card>
// 			<Card.Body>
// 				<h3 className='mb-4'>기술적 고민</h3>

// 				{challenges.length === 0 ? (
// 					<Error mainErrorMessage='아직 기술적 고민이 없어요' />
// 				) : (
// 					challenges.map((challenge) => {
// 						return (
// 							<Card className='col-xs-12 col-6 hover-effect'>
// 								<Card.Body>
// 									<h4>{challenge.name}</h4>
// 									<p>{parser(challenge.description)}</p>
// 								</Card.Body>
// 							</Card>
// 						)
// 					})
// 				)}
// 			</Card.Body>
// 		</Card>
// 	)
// }

export default PortfolioDetail
