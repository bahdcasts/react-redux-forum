import { GET_THREADS, GET_THREADS_LOADED, GET_THREADS_LOADING } from '../actions/threads'

const threadsReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case GET_THREADS:
      return action.payload
    case GET_THREADS_LOADED:
      return {
        ...state,
        loading: false
      }
    case GET_THREADS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export default threadsReducer
