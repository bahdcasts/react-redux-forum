import React from 'react'
import { connect } from 'react-redux'
import { parse } from '../../lib/query-string'

import CheckedIcon from '../CheckedIcon'

import { changeQueryParam, clearQueryParams } from '../../store/actions/router' 

const Filters = ({ mostPopular, setUnanswered, by, popular, unanswered, user, myThreads, clearParams }) => ((
  <ul className="list-group mb-3">
    <li className="list-group-item" onClick={clearParams}>All</li>
    {
      user &&
      <li className="list-group-item" onClick={() => myThreads(user.username)}>
        {by && <CheckedIcon />}
        My threads</li>
    }
    <li className="list-group-item" onClick={setUnanswered}>
      {unanswered && <CheckedIcon />}
      Unanswered
    </li>    
    <li className="list-group-item" onClick={mostPopular}>
      {popular && <CheckedIcon />}
      Most Popular
    </li>
  </ul>
))

export default connect(state => ({
  user: state.auth.user,
  popular: parse(state.router.location.search).popular,
  unanswered: parse(state.router.location.search).unanswered,
  by: parse(state.router.location.search).by
}), dispatch => ({
  mostPopular: () => dispatch(changeQueryParam('popular', true)),
  setUnanswered: () => dispatch(changeQueryParam('unanswered', true)),
  myThreads: (name) => dispatch(changeQueryParam('by', name)),
  clearParams: () => dispatch(clearQueryParams())
}))(Filters)
