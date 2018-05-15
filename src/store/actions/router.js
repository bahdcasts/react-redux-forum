import queryString from 'query-string'
import { push } from 'react-router-redux'

export const TRIGGER_LOAD_THREADS = 'TRIGGER_LOAD_THREADS'

export const changeQueryParams = (value, name) => (dispatch, getState) => {
  const { location } = getState().router
  
  const query = queryString.parse(location.search)
  query[name] = value
  console.log(location, value, name, query)
  dispatch(push(`${location.pathname}?${queryString.stringify(query)}`))
  dispatch({
    type: TRIGGER_LOAD_THREADS
  })
}
