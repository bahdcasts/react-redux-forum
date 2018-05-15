import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { createStore, compose, applyMiddleware } from 'redux'

import reducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const routerHistory = createHistory()

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk, routerMiddleware(routerHistory))
  )
)
export default store
