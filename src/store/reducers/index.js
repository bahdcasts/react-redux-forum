import { combineReducers } from 'redux'

import threadReducer from './thread'
import threadsReducer from './threads'
import channelsReducer from './channels'

const reducer = combineReducers({
  threads: threadsReducer,
  channels: channelsReducer,
  thread: threadReducer
})

export default reducer
