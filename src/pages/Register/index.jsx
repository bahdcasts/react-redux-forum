import React, { Component } from 'react';
import { connect } from 'react-redux'

import RegisterForm from './RegisterForm';

class RegisterContainer extends Component {
  componentWillMount() {
    if (this.props.user) {
      return this.props.history.push('/')
    }
  }
  render() {
    return (
      <RegisterForm />
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(RegisterContainer);
