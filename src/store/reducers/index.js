import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import notyReducer from './noty'
import authReducer from './auth'
import threadReducer from './thread'
import threadsReducer from './threads'
import channelsReducer from './channels'
import editThreadReducer from './edit-thread'
import createReplyReducer from './create-reply'
import createThreadReducer from './create-thread'

const reducer = combineReducers({
  threads: threadsReducer,
  channels: channelsReducer,
  thread: threadReducer,
  form: formReducer,
  auth: authReducer,
  noty: notyReducer,
  createThread: createThreadReducer,
  editThread: editThreadReducer,
  createReply: createReplyReducer,
  router: routerReducer
})

export default reducer
