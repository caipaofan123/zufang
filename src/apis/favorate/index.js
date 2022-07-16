import request from '@/util/request'

const getFavrList = () => {
  return request({
    url: '/user/favorites'
  })
}

export { getFavrList }
