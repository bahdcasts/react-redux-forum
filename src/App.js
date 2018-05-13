import React, { Component, Fragment } from 'react';

import Navbar from './components/Navbar';
import Channels from './components/Channels';
import AppRouter from './components/AppRouter';
import CreateThread from './components/CreateThread'
import CreateThreadButton from './components/CreateThread/CreateThreadButton'

class App extends Component {
  render() {
    const isNotAuthPath = this.props.history.location.pathname !== '/register' && this.props.history.location.pathname !== '/login';
    return (
      <Fragment>
        <Navbar />
        <CreateThread />
        <div className="my-4">
          <div className="container">
            <div className="row justify-content-center">
              {
                 isNotAuthPath &&
                <div className="col-md-4">
                  <CreateThreadButton />
                  <Channels />
                </div>
              }
              <div className="col-md-8">
                <AppRouter />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
