import Gravatar from 'react-gravatar'
import React, { Fragment } from 'react'
import distanceInWordsStrict from 'date-fns/distance_in_words_strict'

const SingleThread = ({ thread }) => (
  <Fragment>
    <div className="card mb-3">
      <div className="card-header">
        <Gravatar email={thread.creator.email} className="mr-3 rounded-circle" width="30px" height="30px" />
        <span className="text-sm text-muted">{thread.creator.name}, <b>{distanceInWordsStrict(new Date(), thread.created_at)} ago</b></span>
      </div>
      <div className="card-body">
        <h5 className="text-center">{thread.title}</h5>
        <p className="text-center">{thread.body}</p>
      </div>
      <div className="card-footer text-muted">
        <span>{thread.replies_count} replies</span>
        <a href="" className="btn btn-primary float-right btn-xs">{thread.channel.name}</a>
      </div>
    </div>
  </Fragment>
);

export default SingleThread
