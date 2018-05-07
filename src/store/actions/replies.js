import axios from 'axios'

import config from './../../config'

export const GET_REPLIES = 'GET_REPLIES'
export const GET_REPLIES_LOADED = 'GET_REPLIES_LOADED'

export const getReplies = (id) => async (dispatch) => {
  const response = await axios.get(`${config.apiUrl}/threads/${id}/replies`)

  dispatch({
    type: GET_REPLIES,
    payload: response.data.data
  })
  dispatch({
    type: GET_REPLIES_LOADED
  })
}
