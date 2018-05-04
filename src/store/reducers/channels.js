import { GET_CHANNELS, GET_CHANNELS_LOADED, GET_CHANNELS_LOADING } from '../actions/channels'

const channelsReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case GET_CHANNELS:
      return {
        ...state,
        data: action.payload
      }
    case GET_CHANNELS_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_CHANNELS_LOADED:
      return {
        ...state,
        loading: false
      }
    default:
      return state;
  }
}

export default channelsReducer
