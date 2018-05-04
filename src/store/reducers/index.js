import { combineReducers } from 'redux'

import threadsReducer from './threads'
import channelsReducer from './channels'

const reducer = combineReducers({
  threads: threadsReducer,
  channels: channelsReducer
})

export default reducer
