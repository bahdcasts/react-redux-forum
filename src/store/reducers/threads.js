import { GET_THREADS } from '../actions/threads'

const threadsReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case GET_THREADS:
      return action.payload
    default:
      return state
  }
}

export default threadsReducer
