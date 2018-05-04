import { GET_CHANNELS } from '../actions/channels'

const channelsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CHANNELS:
      return action.payload
    default:
      return state;
  }
}

export default channelsReducer
