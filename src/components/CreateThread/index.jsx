import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import CreateThreadForm from './CreateThreadForm'

class CreateThread extends React.Component {
  render() {
    return (
      <Fragment>
        {this.props.authenticated && <CreateThreadForm />}
      </Fragment>
    )
  }
}

export default connect(state => ({
  authenticated: state.auth.user
}))(CreateThread)
