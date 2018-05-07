import { connect } from 'react-redux'
import React, { Fragment } from 'react'

import SingleThread from './SingleThread'
import Loader from '../../components/Loader'

import { getThread } from '../../store/actions/threads'
import { getReplies } from '../../store/actions/replies'

class ThreadContainer extends React.Component {
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
    console.log(this.props)
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
  replies: state.thread.replies
})

const mapDispatchToProps = (dispatch) => ({
  getThread: (id) => {
    dispatch(getThread(id))
  },
  getReplies: (id, page) => {
    dispatch(getReplies(id, page))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ThreadContainer)
