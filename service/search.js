import request from './api.js'

/**
 * 热搜榜
 */
export function getHotsSearch () {
  return request({
    url: '/search/hot/detail'
  })
}

/**
 * 搜索
 */
export function getSearchResult(keywords, limit, type) {
  return request({
    url: '/search',
    data: {
      keywords,
      limit,
      type
    }
  })
}

/**
 * 单曲的播放URL
 */
export function getMusicUrl(id) {
  return request({
    url: '/song/url',
    data: {
      id
    }
  })
}

/**
 * 单曲详情
 */
export function getMusicDetail(ids) {
  return request({
    url: '/song/detail',
    data: {
      ids
    }
  })
}