import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pagina1 from './pagina1';
<<<<<<< HEAD
import Pagina2 from './pagina2';
import Contact from './contact';
=======
import Login from './login';


>>>>>>> 2dde8991e74b5c72e1057edc7c1e8b52cf3258bf


const Router = () => (
  <Switch>
    <Route exact path="/" component={Pagina1} />
    <Route path="/login" component={Login} />
    <Route path="/pagina1" component={Pagina1} />
    <Route path="/contact" component ={Contact} />
  </Switch>
)

export default Router;
