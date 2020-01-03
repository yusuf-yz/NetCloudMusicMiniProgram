import request from './api.js'

/**
 * 热门话题
 */
export function getHotTopic(limit) {
  return request({
    url: '/hot/topic',
    data: {
      limit
    }
  })
}

/**
 * 云村热评
 */
export function getHotWall() {
  return request({
    url: '/comment/hotwall/list'
  })
}