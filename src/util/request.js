import axios from 'axios'
import store from '@/store'
const request = axios.create({
  baseURL: 'http://liufusong.top:8080',
  timeout: 15000
})
request.interceptors.request.use(
  (config) => {
    const token = store.state.user.token
    // console.log(token)
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default request
