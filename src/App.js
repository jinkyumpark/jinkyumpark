import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Topnav from './common/Topnav';
import MainPage from './root/MainPage';
import Resume from './resume/Resume';
import Portfolio from './portfolio/Portfolio';

function App() {
    return (
        <div className='App'>
            <Router>
                <Topnav />

                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='resume' element={<Resume />} />
                    <Route path='portfolio' element={<Portfolio />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
