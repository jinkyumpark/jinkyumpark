import React from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components';
import '../css/hover-effect.css'
import Error from '../common/Error'
import Portfolio from '../model/Portfolio'
import PortfolioData from '../data/PortfolioData'
import PortfolioDetailBasicInfoCard from '../portfolio/detail/PortfolioDetailBasicInfoCard'
import PortfolioDetailFeaturesCard from '../portfolio/detail/PortfolioDetailFeaturesCard'
import PortfolioDetailTechnology from '../portfolio/detail/PortfolioDetailTechnology'
import PortfolioDbCard from '../portfolio/detail/PortfolioDbCard'
import PortfolioDifficultyCard from '../portfolio/detail/PortfolioDifficulties'
import PortfolioDetailExplanationCard from '../portfolio/detail/PortfolioDetailExplanationCard';

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
						<div className='col-12 mt-4'>
							<img src={portfolio.thumbnailImage} alt={`${portfolio.name}`} className='img-fluid rounded border w-100' />
						</div>

						<FullContainer>
							<PortfolioDetailBasicInfoCard portfolio={portfolio} />
						</FullContainer>

						<HalfContainer>
							<PortfolioDetailFeaturesCard portfolio={portfolio} />
						</HalfContainer>

						<HalfContainer>
							<PortfolioDetailTechnology portfolio={portfolio} />
						</HalfContainer>

						<FullContainer>
							<PortfolioDetailExplanationCard portfolio={portfolio} />
						</FullContainer>

						<FullContainer>
							<PortfolioDbCard portfolio={portfolio} />
						</FullContainer>

						<FullContainer>
							<PortfolioDifficultyCard portfolio={portfolio}/>
						</FullContainer>
					</div>
				</div>
			)}
		</div>
	)
}

const FullContainer = styled.div.attrs({
	className: `col-12 mt-4`
})``;

const HalfContainer = styled.div.attrs({
	className: `col-xs-12 col-lg-6 mt-4`
})``;

export default PortfolioDetail
