import { TRIGGER_LOAD_THREADS } from '../actions/router'

const eventsReducer = (state = {}, action) => {
  switch (action.type) {
    case TRIGGER_LOAD_THREADS:
      return {
        TRIGGER_LOAD_THREADS: true
      }
    default:
      return state
  }
}

export default eventsReducer
