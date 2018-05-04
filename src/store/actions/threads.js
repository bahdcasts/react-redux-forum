import axios from 'axios'

import config from '../../config'

const GET_THREADS = 'GET_THREADS'


export const getThreads = () => async (dispatch, getState) => {
  const response = await axios.get(`${config.apiUrl}/threads`)

  dispatch({
    type: GET_THREADS,
    payload: response.data
  })
} 