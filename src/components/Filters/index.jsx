import React from 'react'
import { parse } from 'query-string'
import { connect } from 'react-redux'

import { changeQueryParam } from '../../store/actions/router' 

const CheckedIcon = () => ((
  <span className="mr-2">
    <ion-icon name="checkmark"></ion-icon>
  </span>
))

const Filters = ({ mostPopular, setUnanswered, by, popular, unanswered, user, myThreads }) => ((
  <ul className="list-group mb-3">
    <li className="list-group-item">All</li>
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
  myThreads: (name) => dispatch(changeQueryParam('by', name))
}))(Filters)
