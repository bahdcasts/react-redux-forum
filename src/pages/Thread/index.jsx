import React from 'react'
import { connect } from 'react-redux'

import SingleThread from './SingleThread'

import { getThread } from '../../store/actions/threads'

class ThreadContainer extends React.Component {
  componentWillMount() {
    this.props.getThread(this.props.match.params.id)
  }
  render() {
    return (
      <SingleThread />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getThread: (id) => {
    dispatch(getThread(id))
  }
})

export default connect(null, mapDispatchToProps)(ThreadContainer)
