import { REPLY_CREATED } from '../actions/replies'
import { THREAD_CREATED, THREAD_UPDATED } from '../actions/threads'
import { LOGIN_USER, LOGOUT_USER } from '../actions/auth'
 
const notyReducer = (state = {}, action) => {
  switch (action.type) {
    case REPLY_CREATED:
      return {
        type: 'success',
        message: 'Reply created successfully.'
      }
    case LOGIN_USER:
      return {
        type: 'success',
        message: 'Login Successful !'
      }
    case LOGOUT_USER:
      return {
        type: 'success',
        message: 'Logout successful.'
      }
    case THREAD_CREATED:
      return {
        type: 'success',
        message: 'Thread created successfully.'
      }
    case THREAD_UPDATED:
      return {
        type: 'success',
        message: 'Thread updated successfully.'
      }
    default:
      return state
  }
}

export default notyReducer
