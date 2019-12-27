import request from './api.js'

export function getHotsSearch () {
  return request({
    url: '/search/hot/detail'
  })
}

export function getSearchResult(keywords, limit) {
  return request({
    url: '/search',
    data: {
      keywords,
      limit
    }
  })
}