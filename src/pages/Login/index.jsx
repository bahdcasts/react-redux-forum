import React, { Component } from 'react';

import LoginForm from './LoginForm';

class LoginContainer extends Component {
  handleSubmit = (values) => {
    console.log(values)
  }
  render() {
    return (
      <LoginForm
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default LoginContainer;
