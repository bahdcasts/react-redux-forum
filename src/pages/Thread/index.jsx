import { connect } from 'react-redux'
import React, { Fragment } from 'react'

import SingleThread from './SingleThread'
import Loader from '../../components/Loader'

import { getReplies } from '../../store/actions/replies'
import { getThread, updateThread } from '../../store/actions/threads'

class ThreadContainer extends React.Component {
  state = {
    editing: false
  }

  switchEditing = () => {
    this.setState({ editing: !this.state.editing })
  }

  handleUpdateThread = async (id, values) => {
    await this.props.updateThread(id, values)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.editedThread) {
      this.switchEditing()
    }
  }

  componentWillMount() {
    const { id } = this.props.match.params
    this.props.getThread(id)
    this.props.getReplies(id)
  }

  getPageCount = (total, perPage) => {
    return Math.ceil(total / perPage);
  }

  handlePageChange = (page) => {
    const { id } = this.props.match.params
    this.props.getReplies(id, page.selected + 1)
  }
  render() {
    return (
      <Fragment>
        {
          !this.props.loading &&
          <SingleThread
            thread={this.props.thread}
            replies={this.props.replies}
            getPageCount={this.getPageCount}
            handlePageChange={this.handlePageChange}
            loadingReplies={this.props.loadingReplies}
            user={this.props.user}
            switchEditing={this.switchEditing}
            editing={this.state.editing}
            handleUpdateThread={this.handleUpdateThread}
          />
        }
        {
          this.props.loading &&
          <Loader />
        }
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  thread: state.thread.data,
  loading: state.thread.loading,
  loadingReplies: state.thread.loadingReplies,
  replies: state.thread.replies,
  user: state.auth.user,
  editedThread: state.editThread.thread
})

const mapDispatchToProps = (dispatch) => ({
  getThread: (id) => {
    dispatch(getThread(id))
  },
  getReplies: (id, page) => {
    dispatch(getReplies(id, page))
  },
  updateThread: (id, data) => dispatch(updateThread(id, data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ThreadContainer)
