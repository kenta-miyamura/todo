import axios from 'axios'

const url = '/api/comment'

export default {
  index() {
    return axios.get(url)
  },
  show(id) {
    return axios.get(`${url}/${id}`)
  },
  store(params) {
    return axios.post(url, params)
  },
  destroy(id) {
    return axios.delete(`${url}/${id}`)
  },
}
