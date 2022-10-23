import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Topnav from './common/Topnav';
import Main from './main/Main';
import Resume from './resume/Resume';
import Portfolio from './portfolio/Portfolio';
import PortfolioDetail from './portfolio/PortfolioDetail';
import Technology from './technology/Technology';
import TechnologyDetail from './technology/TechnologyDetail';

function App() {
    return (
        <div className='App'>
            <Router>
                <Topnav />

                <Routes refresh>
                    <Route path='/' element={<Main />} />
                    <Route path='resume' element={<Resume />} />
                    <Route path='technology' element={<Technology />} />
                    <Route
                        path='technology/:technologyName'
                        element={<TechnologyDetail />}
                    />
                    <Route path='portfolio' element={<Portfolio />} />
                    <Route
                        path='portfolio/:portfolioName'
                        element={<PortfolioDetail />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
