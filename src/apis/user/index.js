import request from '@/util/request'

const login = (username, password) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: { username, password }
  })
}
const getUserInfo = () => {
  return request({
    url: '/user'
  })
}

export { login, getUserInfo }
