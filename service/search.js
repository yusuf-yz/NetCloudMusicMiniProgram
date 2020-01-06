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

/**
 * 单曲评论
 */
export function getMusicComment(id, limit) {
  return request({
    url: '/comment/music',
    data: {
      id,
      limit
    }
  })
}

/**
 * 歌词
 */
export function getMusicLyric(id) {
  return request({
    url: '/lyric',
    data: {
      id
    }
  })
}

/**
 * 添加到我的喜欢
 */
export function addMyLike(id) {
  return request({
    url: '/like',
    data: {
      id
    }
  })
}