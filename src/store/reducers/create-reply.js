import { REPLY_CREATED } from '../actions/replies'

const createReplyReducer = (state = {}, action) => {
  switch (action.type) {
    case REPLY_CREATED:
      return {
        reply: action.payload
      }
    default:
      return state
  }
}

export default createReplyReducer
