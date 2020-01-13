import request from './api.js'

/**
 * 轮播图
 */
export function getBanner (type) {
  return request({
    url: '/banner',
    data: {
      type
    }
  })
}

/**
 * 推荐歌单
 */
export function getRecommend (limit) {
  return request({
    url: '/personalized',
    data: {
      limit
    }
  })
}

/**
 * 热门电台
 */
export function getHotRadio (limit) {
  return request({
    url: '/dj/hot',
    data: {
      limit
    }
  })
}

/**
 * 每日推荐
 */
export function getDayRecommend () {
  return request({
    url: '/recommend/songs'
  })
}

/**
 * 歌单分类
 */
// export function getPlayList () {
//   return request({
//     url: '/playlist/catlist'
//   })
// }

/**
 * 歌单 ( 网友精选碟 )
 */
export function getPlayList (order) {
  return request({
    url: '/top/playlist',
    data: {
      order
    }
  })
}

/**
 * 精品歌单
 */
export function getHighQualityList (cat) {
  return request({
    url: '/top/playlist/highquality',
    data: {
      cat: !cat ? '全部' : cat
    }
  })
}

/**
 * 歌单详情
 */
export function getPlayListDetail (id) {
  return request({
    url: '/playlist/detail',
    data: {
      id
    }
  })
}

/**
 * 排行榜
 */
export function getTop (idx) {
  return request({
    url: '/top/list',
    data: {
      idx
    }
  })
}

/**
 * 电台
 */
export function getRadioTop (limit, offset) {
  return request({
    url: '/dj/program/toplist',
    data: {
      limit,
      offset
    }
  })
}