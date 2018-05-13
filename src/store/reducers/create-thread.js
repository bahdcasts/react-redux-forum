import { THREAD_CREATED } from '../actions/threads'

const createThreadReducer = (state = {}, action) => {
  switch (action.type) {
    case THREAD_CREATED:
      return {
        ...state,
        thread: action.payload
      }
    default:
      return state
  }
} 

export default createThreadReducer