import axios from 'axios'

export const GET_CHANNELS = 'GET_CHANNELS'


const getChannels = () => async (dispatch, getState) => {
  const response = await axios.get('https://v-forum-api.bahdcasts.com/api/channels')

  dispatch({
    type: GET_CHANNELS,
    payload: response.data
  });
};

export default getChannels
