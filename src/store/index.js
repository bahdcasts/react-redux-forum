import { createStore } from 'redux'

import { GET_CHANNELS } from './actions/channels'

const reducer = (state, action) => {
  if (action.type === GET_CHANNELS) {
    return {
      channels: [{
        id: 1,
        name: 'angular'
      }, {
        id: 2,
        name: 'laravel'
      }]
    }
  }
  return state
}

const initialState = {
  channels: []
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
