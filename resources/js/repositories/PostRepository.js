import axios from 'axios'

const url = '/api/posts'

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
  destory(id) {
    return axios.post(url, id)
  },
}
