import { push } from 'react-router-redux'
import { parse, stringify } from 'query-string'

export const changeQueryParam = (name, value) => (dispatch, getState) => {
  const { location } = getState().router
  const query = parse(location.search)
  
  if (query[name] && name !== 'page') {
    delete query[name]
  } else {
    query[name] = value
  }

  dispatch(push(`${location.pathname}?${stringify(query)}`))
}