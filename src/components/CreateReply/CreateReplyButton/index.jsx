import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const CreateReplyButton = ({ authenticated }) => ((
  <Fragment>
    {
      authenticated &&
      <button className="btn btn-info my-4 float-right" data-toggle="modal" data-target="#createReply">Create a reply</button>
    }
    {
      !authenticated &&
      <Link to="/login" className="btn btn-info my-4 float-right">Sign in To Create a reply</Link>
    }
  </Fragment>
))

export default connect(state => ({
  authenticated: state.auth.user
}))(CreateReplyButton)
