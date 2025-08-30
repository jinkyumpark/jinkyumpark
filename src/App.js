import {Route, Routes} from 'react-router-dom'
import './common.css'

import Topnav from './common/Topnav'

import IndexRoute from './route/index/IndexRoute'
import ProductDetailRoute from './route/product/detail/ProductDetail';
import ProductsRoute from './route/product/ProductRoute';
import ProductPrivacyRoute from './route/product/ProductPrivacy';

function App() {
    return (
        <div className='App h-100'>
            <Topnav/>

            <Routes refresh>
                <Route path='/' element={<IndexRoute/>}/>

                <Route path='/products' element={<ProductsRoute/>}/>
                <Route path='/products/:productName' element={<ProductDetailRoute/>}/>
                <Route path='/products/:productName/privacy' element={<ProductPrivacyRoute/>}/>
            </Routes>
        </div>
    )
}

export default App
