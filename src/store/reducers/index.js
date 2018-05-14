import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import authReducer from './auth'
import threadReducer from './thread'
import threadsReducer from './threads'
import channelsReducer from './channels'
import editThreadReducer from './edit-thread'
import createThreadReducer from './create-thread'

const reducer = combineReducers({
  threads: threadsReducer,
  channels: channelsReducer,
  thread: threadReducer,
  form: formReducer,
  auth: authReducer,
  createThread: createThreadReducer,
  editThread: editThreadReducer
})

export default reducer
