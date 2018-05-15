import { THREAD_UPDATED } from '../actions/threads'

const editThreadReducer = (state = {}, action) => {
  switch (action.type) {
    case THREAD_UPDATED:
      return {
        ...state,
        thread: action.payload
      }
    default:
      return state
  }
} 

export default editThreadReducer