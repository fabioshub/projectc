import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pagina1 from './pagina1';
import Pagina2 from './pagina2';
import Browse from './browse';
import Cart from './cart';
import Wishlist from './wishlist';

import ProductInfoPage from './productInfoPage';
import Contact from './contact';
import Terms from './termsandconditions'
import Privacy from './privacy';




const Router = () => (
  <Switch>
    <Route exact path="/" component={Pagina1} />
    <Route path="/pagina1" component={Pagina1} />
    <Route path="/pagina2" component={Pagina2} />
    <Route path="/cart" component={Cart} />
    <Route path="/browse" component={Browse} />
    <Route path="/contact" component ={Contact} />
    <Route path='/termsandservices' component={Terms} />
    <Route path='/privacy' component={Privacy} />
    <Route path="/productinfopage" component={ProductInfoPage} />

  </Switch>
)

export default Router;
