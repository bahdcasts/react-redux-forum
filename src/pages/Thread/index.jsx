import { connect } from 'react-redux'
import React, { Fragment } from 'react'

import SingleThread from './SingleThread'
import Loader from '../../components/Loader'

import { getThread } from '../../store/actions/threads'

class ThreadContainer extends React.Component {
  componentWillMount() {
    this.props.getThread(this.props.match.params.id)
  }
  render() {
    return (
      <Fragment>
        {
          !this.props.loading &&
          <SingleThread
            thread={this.props.thread}
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
  loading: state.thread.loading
})

const mapDispatchToProps = (dispatch) => ({
  getThread: (id) => {
    dispatch(getThread(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ThreadContainer)
