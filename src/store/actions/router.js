import { push } from 'react-router-redux'
import { parse, stringify } from 'query-string'

export const addQueryParam = (name, value) => (dispatch, getState) => {
  const { location } = getState().router
  const query = parse(location.search)
  query[name] = value

  dispatch(push(`${location.pathname}?${stringify(query)}`))
}