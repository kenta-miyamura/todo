import axios from 'axios'

const url = '/api/auth'

export default {
  login(params) {
    return axios.post(`${url}/login`, params)
  },
  logout() {
    return axios.post(`${url}/logout`)
  },
}
