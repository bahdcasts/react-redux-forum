import { connect } from 'react-redux'
import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import CreateThreadForm from './CreateThreadForm'

import { createThread } from '../../store/actions/threads'

class CreateThread extends React.Component {
  constructor() {
    super()
    this.modalRef = React.createRef()
  }
  handleSubmit = async (data) => {
    const { $ } = window
    $('#createThread').modal('hide')
    // await this.props.createThread(data)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.createdThread) {
      return this.props.history.push(`/thread/${nextProps.createdThread.id}`)
    }
  }

  render() {
    return (
      <Fragment>
        {this.props.authenticated && <CreateThreadForm modalRef={this.modalRef} onSubmit={this.handleSubmit} channels={this.props.channels} />}
      </Fragment>
    )
  }
}

export default connect(state => ({
  authenticated: state.auth.user,
  channels: state.channels.data,
  createdThread: state.createThread.thread,
}), dispatch => ({
  createThread: (data) => dispatch(createThread(data))
}))(withRouter(CreateThread))
