import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import { createReply } from '../../store/actions/replies'

import CreateReplyForm from './CreateReplyForm'

class CreateReply extends React.Component {

  handleCreateReply = async (data) => {
    await this.props.createReply(this.props.thread.id, data)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.createdReply) {
      const { $ } = window
      $('#createReply').modal('hide')
    }
  }

  render() {
    return (
      <Fragment>
        {
          this.props.authenticated &&
          <CreateReplyForm onSubmit={this.handleCreateReply} />
        }
      </Fragment>
    )
  }
}

export default connect(state => ({
  authenticated: state.auth.user,
  thread: state.thread.data,
  createdReply: state.createReply.reply
}), dispatch => ({
  createReply: (threadId, data) => dispatch(createReply(threadId, data))
}))(CreateReply)
