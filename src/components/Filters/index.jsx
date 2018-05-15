import React from 'react'
import { parse } from 'query-string'
import { connect } from 'react-redux'

import { changeQueryParam } from '../../store/actions/router' 

const Filters = ({ mostPopular, setUnanswered, popular, unanswered }) => ((
  <ul className="list-group mb-3">
    <li className="list-group-item">All</li>
    <li className="list-group-item">My threads</li>
    <li className="list-group-item" onClick={setUnanswered}>
      {unanswered && <ion-icon name="checkmark"></ion-icon>}
      Unanswered
    </li>    
    <li className="list-group-item" onClick={mostPopular}>
      {popular && <ion-icon name="checkmark"></ion-icon>}
      Most Popular
    </li>
  </ul>
))

export default connect(state => ({
  popular: parse(state.router.location.search).popular,
  unanswered: parse(state.router.location.search).unanswered
}), dispatch => ({
  mostPopular: () => dispatch(changeQueryParam('popular', true)),
  setUnanswered: () => dispatch(changeQueryParam('unanswered', true))
}))(Filters)
