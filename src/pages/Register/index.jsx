import React, { Component } from 'react';
import { connect } from 'react-redux'

import RegisterForm from './RegisterForm';

import { registerUser } from '../../store/actions/auth'

class RegisterContainer extends Component {
  componentWillMount() {
    if (this.props.user) {
      return this.props.history.push('/')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      return this.props.history.push('/')
    }
  }

  handleSubmit = async (values) => {
    await this.props.registerUser(values)
  }

  render() {
    return (
      <RegisterForm
        onSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user
})

const mapDispatchToProps = (dispatch) => ({
  registerUser: (values) => dispatch(registerUser(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
