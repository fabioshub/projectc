import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Navbarcomplete from './navbar'
import Navigationbar from './newnavbar'

import Pagina1 from './pagina1'
import Footer from './footer'
import Router from './router'
import {Grid, Row, Col} from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
var destination = document.querySelector('#root')

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navigationbar/>
      <Router/>
      <Footer/>
    </div>
  </BrowserRouter>

  ,destination

);
