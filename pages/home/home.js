// pages/home/home.js
import { getBanner } from '../../service/home.js'
import { getRecommend } from '../../service/home.js'
import { getHotRadio } from '../../service/home.js'
import { getDayRecommend } from '../../service/home.js'
import { getPlayList } from '../../service/home.js'
import { getTop } from '../../service/home.js'
import { getRadioTop } from '../../service/home.js'

// 注册一个页面
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ['我的', '发现', '云村'], // tab-control
    banners: [], // banners
    categorys: [
      { image: '/assets/image/home/calendar.png', title: '每日推荐' },
      { image: '/assets/image/home/song_list.png', title: '歌单' },
      { image: '/assets/image/home/leader_board.png', title: '排行榜' },
      { image: '/assets/image/home/radio.png', title: '电台' }
    ], // 分类
    recommends: [], // 推荐歌单
    hotradios: [], // 热门电台
    recommendList: {}, // 每日推荐
    boards: {}, // 排行榜
    newSongBoards: {}, // 新歌榜
    hotSongBoards: {}, // 热歌榜
    originalBoards: {}, // 原创榜
    soarSongBoards: {}, // 飙升榜
    rapSongBoards: {}, // 说唱榜
    poster: '', // 海报
    currentDay: '', // 当日
    index: '', // 首次传入索引
    isShow: true, // 主页
    showDaily: false, // 每日推荐组件
    showRecommend: true, // 每日推荐列表页
    showPlay: false, // 播放组件
    showBoard: false, // 排行榜组件
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 1.请求轮播图
    this._getBanner(1)

    // 2.请求推荐歌单
    this._getRecommend(6)

    // 3.请求热门电台
    this._getHotRadio(3)
  },

  // -------------- 接口 ---------------

  /**
   * 获取轮播图
   */
  _getBanner: function(type) {
    getBanner(type).then(res => {
      if (res.data.code === 200) {
        const banners = res.data.banners
        const poster = banners[0].pic

        this.setData({
          banners,
          poster
        })
      }
    })
  },

  /**
   * 每日推荐
   */
  _getDayRecommend: function() {
    getDayRecommend().then(res => {
      if (res.data.code === 200) {
        const data = res.data.data.dailySongs
        this.setData({
          recommendList: data
        })
      } else {
        wx.showToast({
          title: '请先登录',
          image: '/assets/image/profile/error.png'
        })
      }
    })
  },

  /**
   * 歌单
   */
  _getPlayList: function() {
    getPlayList().then(res => {
      if (res.data.code === 200) {
        console.log(res)
      }
    })
  },

  /**
   * 排行榜
   */
  _getTop: function(idx) {
    getTop(idx).then(res => {
      if (res.data.code === 200) {
        // console.log(res)
        const data = res.data.playlist
        switch (idx) {
          case 0:                 // 新歌榜
            this.setData({
              newSongBoards: data
            })
            break
          case 1:                 // 热歌榜
            this.setData({
              hotSongBoards: data
            })
            break
          case 2:                 // 原创榜
            this.setData({
              originalBoards: data
            })
            break
          case 3:                 // 飙升榜
            this.setData({
              soarSongBoards: data
            })
            break
          case 23:                // 说唱榜
            this.setData({
              rapSongBoards: data
            })
            break
          default:
            break
        }
      }
    })
  },

  /**
   * 电台
   */
  _getRadioTop: function(limit, offset) {
    getRadioTop(limit, offset).then(res => {
      if (res.data.code === 200) {
        console.log(res)
      }
    })
  },

  /**
   * 获取推荐歌单
   */
  _getRecommend: function(limit) {
    getRecommend(limit).then(res => {
      if (res.data.code === 200) {
        const recommends = res.data.result

        this.setData({
          recommends
        })
      }
    })
  },

  /**
   * 获取热门电台
   */
  _getHotRadio: function(limit) {
    getHotRadio(limit).then(res => {
      if (res.data.code === 200) {
        const hotradios = res.data.djRadios

        this.setData({
          hotradios
        })
      }
    })
  },

  // -------------- 操作 ---------------

  /**
   * 轮播图
   */
  // handletabClick: function(data) {
    
  //   const index = data.detail.index
  //   console.log(index)
  // },

  /**
   * 分类
   */
  handleCategoryClick: function(data) {
    const index = data.detail.index
    switch (index) {
      case 0:
        this._getDayRecommend()
        this.setData({
          isShow: false,
          showDaily: true
        })
        break
      case 1:
        this._getPlayList()
        break
      case 2:
        this.getMultipleBoards()
        this.setData({
          isShow: false,
          showBoard: true
        })
        break
      case 3:
        this._getRadioTop(30, 0)
        break
      default:
        break
    }
  },

  /**
   * 获取多个榜单
   */
  getMultipleBoards: function () {
    this._getTop(0)
    this._getTop(1)
    this._getTop(2)
    this._getTop(3)
    this._getTop(23)

    setTimeout(() => {
      console.log(this.data.newSongBoards)
      console.log(this.data.hotSongBoards)
      console.log(this.data.originalBoards)
      console.log(this.data.soarSongBoards)
      console.log(this.data.rapSongBoards)
      const newSongBoards = this.data.newSongBoards
      const hotSongBoards = this.data.hotSongBoards
      const originalBoards = this.data.originalBoards
      const soarSongBoards = this.data.soarSongBoards
      const rapSongBoards = this.data.rapSongBoards

      const data = [newSongBoards, hotSongBoards, originalBoards, soarSongBoards, rapSongBoards]

      this.setData({
        boards: data
      })
    }, 4000)
  },

  /**
   * 每日推荐返回
   */
  handleDailyGoBack: function () {
    this.setData({
      isShow: true,
      showDaily: false
    })
  },

  /**
   * 每日推荐播放
   */
  handleReadyPlay: function (e) {
    const index = e.detail.index
    this.setData({
      index: index,
      showPlay: true,
      showRecommend: false
    })
  },

  /**
   * 每日推荐播放全部
   */
  handlePlayAll: function () {
    const index = 0
    this.setData({
      index: index,
      showPlay: true,
      showRecommend: false
    })
  },

  /**
   * 播放返回
   */
  handlePlayGoBack: function () {
    this.setData({
      showPlay: false,
      showRecommend: true
    })
  },

  /**
   * 排行榜返回
   */
  hanldeBoardGoBack: function () {
    this.setData({
      isShow: true,
      showBoard: false
    })
  }
})