import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Thread from '../../pages/Thread'
import Register from '../../pages/Register';

const AppRouter = () => (
  <Fragment>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />    
    <Route path="/register" component={Register} />  
    <Route path="/thread/:id" component={Thread} />  
  </Fragment>
);

export default AppRouter;
