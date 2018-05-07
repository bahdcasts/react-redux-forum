import Gravatar from 'react-gravatar'
import React, { Fragment } from 'react'
import ReactPaginate from 'react-paginate'
import distanceInWordsStrict from 'date-fns/distance_in_words_strict'

import Reply from './../../../components/Reply'

const SingleThread = ({ thread, replies, handlePageChange, getPageCount }) => (
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
    <div className="container">
      {replies.data.map(reply => <Reply key={reply.id} reply={reply} />)}
      <ReactPaginate
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        disabledClassName="disabled"
        breakClassName="page-link"
        onPageChange={handlePageChange}
        pageCount={getPageCount(replies.total, replies.per_page)}
        forcePage={replies.current_page - 1}
      />
    </div>
  </Fragment>
);

export default SingleThread
