import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pagina1 from './pagina1';
import Pagina2 from './pagina2';
import Browse from './browse';
import ProductInfoPage from './productInfoPage';




const Router = () => (
  <Switch>
    <Route exact path="/" component={Pagina1} />
    <Route path="/login" component={Login} />
    <Route path="/pagina1" component={Pagina1} />
    <Route path="/browse" component={Browse} />
    <Route path="/productinfopage" component={ProductInfoPage} />

  </Switch>
)

export default Router;
