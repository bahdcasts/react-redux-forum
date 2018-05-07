import { GET_THREAD, GET_THREAD_LOADED, GET_THREAD_LOADING } from '../actions/threads'

const threadReducer = (state = { loading: true }, action) => {
   switch (action.type) {
     case GET_THREAD:
       return {
         ...state,
         data: action.payload
       }
     case GET_THREAD_LOADING:
       return {
         ...state,
         loading: true
       }
     case GET_THREAD_LOADED:
       return {
         ...state,
         loading: false
       }
     default:
       return state;
   }
}

export default threadReducer
