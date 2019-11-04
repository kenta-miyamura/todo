import axios from 'axios'

const url = '/api/upload'

export default {
  upload(params) {
    return axios.post(url, params)
  },
}
