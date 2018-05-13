import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const CreateThreadButton = ({ authenticated }) => ((
  <Fragment>
    {
      authenticated &&
      <button className="btn btn-info my-3 form-control" data-toggle="modal" data-target="#createThread">Start thread</button>
    }
    {
      !authenticated &&
      <Link to="/login" className="btn btn-info my-3 form-control">Login to start a thread</Link>
    }
  </Fragment>
))

export default connect(state => ({
  authenticated: state.auth.user
}))(CreateThreadButton)
