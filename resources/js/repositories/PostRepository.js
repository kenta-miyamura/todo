import axios from 'axios'

const url = '/api/posts'

export const postRepository = {
  index () {
    return axios.get(url)
  }
  // show (id) {
  //   return axios.get(`${url}/${id}`)
  // },
  // store (params) {
  //   return axios.post(url, params)
  // }
}
