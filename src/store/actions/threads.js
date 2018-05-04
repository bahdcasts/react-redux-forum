import axios from 'axios'

import config from '../../config'

export const GET_THREADS = 'GET_THREADS'
export const GET_THREADS_LOADED = 'GET_THREADS_LOADED'
export const GET_THREADS_LOADING = 'GET_THREADS_LOADING'

export const getThreads = (page = 1) => async (dispatch, getState) => {
  dispatch({
    type: GET_THREADS_LOADING
  })
  const response = await axios.get(`${config.apiUrl}/threads?page=${page}`)

  dispatch({
    type: GET_THREADS,
    payload: response.data.data
  })
  dispatch({
    type: GET_THREADS_LOADED
  })
} 