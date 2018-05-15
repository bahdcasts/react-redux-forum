import { connect } from 'react-redux'
import React, { Fragment } from 'react'
import { changeQueryParams } from '../../store/actions/router'

const Filters = ({ mostPopular, unanswered }) => ((
  <Fragment>
    <ul className="list-group mb-3">
      <li className="list-group-item">All</li>
      <li className="list-group-item">My Threads</li>
      <li className="list-group-item" onClick={mostPopular}>Most Popular</li>
      <li className="list-group-item" onClick={unanswered}>Unanswered threads</li>      
    </ul>
  </Fragment>
))

export default connect(null, dispatch => ({
  mostPopular: () => dispatch(changeQueryParams(true, 'popular')),
  unanswered: () => dispatch(changeQueryParams(true, 'unanswered'))
}))(Filters)
