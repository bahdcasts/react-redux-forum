import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Login from '../../pages/Login';
import Thread from '../../pages/Thread'
import Threads from '../../pages/Threads';
import Register from '../../pages/Register';

const AppRouter = () => (
  <Fragment>
    <Route path="/login" component={Login} />    
    <Route path="/threads" component={Threads} />    
    <Route path="/register" component={Register} />  
    <Route path="/thread/:id" component={Thread} />
    <Route path="/" exact render={() => <Redirect to="/threads" />} />
  </Fragment>
);

export default AppRouter;
