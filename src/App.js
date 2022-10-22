import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Topnav from "./common/Topnav";
import MainPage from "./root/MainPage";

function App() {
	return (
		<div className="App">
			<Router>
				<Topnav />

				<Routes>
					<Route path="/" element={<MainPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
