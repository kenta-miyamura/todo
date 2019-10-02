import axios from 'axios'

const url = '/api/auth'

export const authRepository = {
  login (params) {
    return axios.post(`${url}/login`, params)
  },
  logout () {
    return axios.post(`${url}/logout`)
  }
  // store (params) {
  //   return axios.post(url, params)
  // }
}
