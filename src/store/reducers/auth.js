import { LOGIN_USER, LOGOUT_USER } from '../actions/auth'

const authUser = JSON.parse(localStorage.getItem('authUser'))

const authReducer = (state = {
  user: authUser ? authUser.user : null,
  accessToken: authUser ? authUser.access_token : null
}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.access_token
      }
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        accessToken: null,
      }
    default:
      return state;
  }
}

export default authReducer
