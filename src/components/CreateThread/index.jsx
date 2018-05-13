import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CreateThreadForm from './CreateThreadForm'

import { createThread } from '../../store/actions/threads'

class CreateThread extends React.Component {
  handleSubmit = async (data) => {
    await this.props.createThread(data)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.createdThread) {
      const { $ } = window
      $('#createThread').modal('hide')
      return this.props.history.push(`/thread/${nextProps.createdThread.id}`)
    }
  }

  render() {
    return (
      <Fragment>
        {this.props.authenticated && <CreateThreadForm onSubmit={this.handleSubmit} channels={this.props.channels} />}
      </Fragment>
    )
  }
}

export default connect(state => ({
  authenticated: state.auth.user,
  channels: state.channels.data,
  createdThread: state.createThread.thread
}), dispatch => ({
  createThread: (data) => dispatch(createThread(data))
}))(withRouter(CreateThread))
