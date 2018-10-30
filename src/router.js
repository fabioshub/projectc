import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pagina1 from './pagina1';
import Login from './login';




const Router = () => (
  <Switch>
    <Route exact path="/" component={Pagina1} />
    <Route path="/login" component={Login} />
    <Route path="/pagina1" component={Pagina1} />
  </Switch>
)

export default Router;
