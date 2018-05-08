import React, { Component } from 'react';
import { connect } from 'react-redux'

import LoginForm from './LoginForm';

import { loginUser } from '../../store/actions/auth'

class LoginContainer extends Component {
  handleSubmit = async (values) => {
    await this.props.loginUser(values)
  }
  render() {
    return (
      <LoginForm
        onSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (values) => dispatch(loginUser(values))
})

export default connect(null, mapDispatchToProps)(LoginContainer);
