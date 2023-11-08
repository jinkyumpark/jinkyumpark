import { Routes, Route } from 'react-router-dom'
import './common.css'

import Topnav from './common/Topnav'

import Main from './route/Main'
import PortfolioDetail from './route/PortfolioDetail'
import TechnologyDetail from './route/TechnologyDetail'
import Redirect from './redirect/Redirect'
import ProductRoute from './product/ProductRoute';
import ProductDetail from './product/ProductDetail';
import ProductPrivacy from './product/ProductPrivacy';
import PortfolioRoute from './route/PortfolioRoute';
import ProductDetailKorean from './product/ProductDetailKorean';

import purrfitTrackerKorean from './data/portfolio/purrfitCat/PurrfitTrackerKorean';
import purrfitTrackerEnglish from './data/portfolio/purrfitCat/PurrfitTrackerEnglish';
import ProductDetailEnglish from './product/ProductDetailEnglish';
import purrfitTrackerPrivacyKorean from './data/portfolio/purrfitCat/PurrfitTrackerPrivacyKorean';
import purrfitTrackerPrivacyEnglish from './data/portfolio/purrfitCat/PurrfitTrackerPrivacyEnglish';
import ProductPrivacyEnglish from './product/privacy/ProductPrivacyEnglish';
import ProductPrivacyKorean from './product/privacy/ProductPrivacyKorean';

function App() {
	return (
		<div className='App h-100'>
			<Topnav />

			<Routes refresh>
				<Route path='/' element={<Main />} />

				<Route path='/portfolio' element={<PortfolioRoute />} />
				<Route path='/portfolio/:portfolioName' element={<PortfolioDetail />} />

				<Route path='/product' element={<ProductRoute />} />
				<Route path='/product/:productName' element={<ProductDetail />} />
				<Route path='/product/:productName/:language' element={<ProductDetail />} />
				<Route path='/product/:productName/privacy' element={<ProductPrivacy />} />

				<Route path='/product/purrfit-tracker.korean' element={<ProductDetailKorean product={purrfitTrackerKorean} />} />
				<Route path='/product/purrfit-tracker/privacy.korean' element={<ProductPrivacyKorean privacyText={purrfitTrackerPrivacyKorean} />} />

				<Route path='/product/purrfit-tracker.english' element={<ProductDetailEnglish product={purrfitTrackerEnglish} />} />
				<Route path='/product/purrfit-tracker/privacy.english' element={<ProductPrivacyEnglish privacyText={purrfitTrackerPrivacyEnglish} />} />

				<Route path='/product/purrfit-tracker.japanese' element={<ProductDetailKorean product={purrfitTrackerKorean} />} />
				<Route path='/product/purrfit-tracker/privacy.japanese' element={<ProductDetailKorean product={purrfitTrackerKorean} />} />

				<Route path='/technology/:technologyName' element={<TechnologyDetail />} />
				
				{/* redirects */}
				<Route path='notion/it-company' element={<Redirect url={`https://jinkyumpark.notion.site/IT-7b54807230e74b588ccdc03c7d04065d?pvs=4`} />} />
				<Route path='notion/everyone-garden' element={<Redirect url={`https://jinkyumpark.notion.site/0e220ea9afce447ea4382e9ef46032a6?pvs=4`} />} />
				<Route path='notion/booksitout' element={<Redirect url={`https://jinkyumpark.notion.site/716ec5f130d1463c9db6cdee924ab8f5?pvs=4`} />} />
				<Route path='notion/books' element={<Redirect url={`https://jinkyumpark.notion.site/bd08f8b2de304071839e188831906766?pvs=4`} />} />
				<Route path='notion/cs' element={<Redirect url={`https://jinkyumpark.notion.site/CS-3824e9348646493e9b1a2ca65d53be09?pvs=4`} />} />
				<Route path='blog/booksiout' element={<Redirect url={`https://blog.jinkyumpark.com/category/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/%EC%B1%85%EC%9E%87%EC%95%84%EC%9B%83%28%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4%29`} />} />
			</Routes>
		</div>
	)
}

export default App
