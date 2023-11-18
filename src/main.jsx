import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './component/Common/Navbar.jsx'
import './index.css'
import Footer from './component/Common/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router/>
    <Navbar/>
    <Footer/>
  </React.StrictMode>,
)
