import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import { withRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import store from './store';
import { routerHistory } from './store'

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={routerHistory}>
      <AppWithRouter />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));
