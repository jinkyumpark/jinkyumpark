import { Routes, Route } from 'react-router-dom'
// Components
import Topnav from './common/Topnav'
import Main from './route/Main'
import Resume from './route/Resume'
import Portfolio from './route/Portfolio'
import Technology from './route/Technology'
import PortfolioDetail from './route/PortfolioDetail'
import TechnologyDetail from './route/TechnologyDetail'

function App() {
	return (
		<div className='App'>
			<Topnav />

			<Routes refresh>
				<Route path='/' element={<Main />} />
				<Route path='/resume' element={<Resume />} />
				<Route path='/technology' element={<Technology />} />
				<Route path='/portfolio' element={<Portfolio />} />

				<Route path='/portfolio/:portfolioName' element={<PortfolioDetail />} />
				<Route path='/technology/:technologyName' element={<TechnologyDetail />} />
			</Routes>
		</div>
	)
}

export default App
