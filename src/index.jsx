import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './common.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Router basename={import.meta.env.BASE_URL}>
		<App />
	</Router>
)
