import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pagina1 from './pagina1';
import Login from './login';
import Checkoutlogin from './checkoutlogin';

import Browse from './browse';
import Cart from './cart';
import Wishlist from './wishlist';
import Payscreen from './payscreen';


import ProductInfoPage from './productInfoPage';
import Contact from './contact';
import Terms from './termsandconditions'
import Privacy from './privacy';
import Faq from './faq';
import userPanelNew from './userPanelNew'




const Router = () => (
  <Switch>
    <Route exact path="/" component={Pagina1} />
    <Route path="/pagina1" component={Pagina1} />
    <Route path="/login" component={Login} />
      <Route path="/payscreen" component={Payscreen} />
      <Route path="/checkoutlogin" component={Checkoutlogin} />
    <Route path="/cart" component={Cart} />
    <Route path="/wishlist" component={Wishlist} />
    <Route path="/browse" component={Browse} />
    <Route path="/contact" component ={Contact} />
    <Route path='/termsandservices' component={Terms} />
    <Route path='/privacy' component={Privacy} />
    <Route path='/faq' component={Faq} />
    <Route path="/productinfopage" component={ProductInfoPage} />
    <Route path="/userpanelnew" component={userPanelNew} />


  </Switch>
)

export default Router;
