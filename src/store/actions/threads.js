import axios from 'axios'

import config from '../../config'

export const GET_THREADS = 'GET_THREADS'


export const getThreads = (page = 1) => async (dispatch, getState) => {
  const response = await axios.get(`${config.apiUrl}/threads?page=${page}`)

  dispatch({
    type: GET_THREADS,
    payload: response.data.data
  })
} 