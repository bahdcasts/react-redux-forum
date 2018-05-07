import axios from 'axios'

import config from './../../config'

export const GET_REPLIES = 'GET_REPLIES'
export const GET_REPLIES_LOADED = 'GET_REPLIES_LOADED'
export const GET_REPLIES_LOADING = 'GET_REPLIES_LOADING'

export const getReplies = (id, page = 1) => async (dispatch) => {
  dispatch({
    type: GET_REPLIES_LOADING
  })
  const response = await axios.get(`${config.apiUrl}/threads/${id}/replies?page=${page}`)

  dispatch({
    type: GET_REPLIES,
    payload: response.data.data
  })
  dispatch({
    type: GET_REPLIES_LOADED
  })
}
