import request from './api.js'

export function getBanner (type) {
  return request({
    url: '/banner',
    data: {
      type
    }
  })
}

export function getRecommend (limit) {
  return request({
    url: '/personalized',
    data: {
      limit
    }
  })
}

export function getHotRadio(limit) {
  return request({
    url: '/dj/hot',
    data: {
      limit
    }
  })
}