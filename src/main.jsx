import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css'
import App from './App'
import Order from './Order'
import Construction from './Construction';
import Checkout from './Checkout'
import Style from './Style'
import './App.css'
import './silkroad.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Construction />} />
        <Route path='/order' element={<Order />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/style' element={<Style />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
