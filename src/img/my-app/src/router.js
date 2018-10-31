import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pagina1 from './pagina1';
import Pagina2 from './pagina2';


const Router = () => (
  <Switch>
    <Route exact path="/" component={Pagina1} />
    <Route path="/pagina2" component={Pagina2} />
    <Route path="/pagina1" component={Pagina1} />
  </Switch>
)

export default Router;
