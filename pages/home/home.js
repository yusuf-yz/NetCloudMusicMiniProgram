// pages/home/home.js
import { getBanner } from '../../service/home.js'
import { getRecommend } from '../../service/home.js'
import { getHotRadio } from '../../service/home.js'
import { getDayRecommend } from '../../service/home.js'
import { getPlayList } from '../../service/home.js'
import { getTop } from '../../service/home.js'
import { getRadioTop } from '../../service/home.js'
import { getHighQualityList } from '../../service/home.js'
import { getPlayListDetail } from '../../service/home.js'
import { getRecommendRadio } from '../../service/home.js'

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
    recommendList: {}, // 每日推荐歌曲
    boards: {}, // 排行榜
    songs: {}, // 歌单
    list: {}, // 歌单列表
    listTitle: '', // 歌单列表标题 
    listAuthor: '', // 歌单列表作者
    parkSongs: {}, // 歌单广场
    radios: {}, // 电台广场
    newSongBoards: {}, // 新歌榜
    hotSongBoards: {}, // 热歌榜
    originalBoards: {}, // 原创榜
    soarSongBoards: {}, // 飙升榜
    // rapSongBoards: {}, // 说唱榜
    poster: '', // 每日推荐海报
    currentDay: '', // 当日
    index: '', // 首次传入索引
    isShow: true, // 主页
    showDaily: false, // 每日推荐组件
    showPlay: false, // 播放组件
    showBoard: false, // 排行榜组件
    showSongs: false, // 歌单组件
    showSongsPark: false, // 歌单广场组件
    showList: false, // 歌单列表组件
    showRadios: false, // 电台广场组件
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
  _getPlayList: function(order) {
    getPlayList(order).then(res => {
      if (res.data.code === 200) {
        const data = res.data.playlists

        this.setData({
          songs: data.slice(0, 21)
        })
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
          // case 26:                // 抖音榜
          //   this.setData({
          //     rapSongBoards: data
          //   })
          //   break
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
   * 推荐电台
   */
  _getRecommendRadio: function () {
    getRecommendRadio().then(res => {
      console.log(res)
      if (res.data.code === 200) {
        const radios = res.data.djRadios

        this.setData({
          radios: radios.length > 9 ? radios.slice(0, 9) : radios
        })
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

  /**
   * 获取歌单广场
   */
  _getHighQualityList: function (cat) {
    getHighQualityList(cat).then(res => {
      if (res.data.code === 200) {
        console.log(res)
        const data = res.data.playlists

        this.setData({
          parkSongs: data.length > 22 ? data.slice(0, 21) : data,
          showSongsPark: true,
          isShow: false
        })
      }
    })
  },

  /**
   * 获取歌单详情
   */
  _getPlayListDetail: function (id) {
    getPlayListDetail(id).then(res => {
      if (res.data.code === 200) {
        const data = res.data.playlist.tracks
        const title = res.data.playlist.name
        const author = res.data.playlist.creator.nickname

        this.setData({
          list: data.length > 22 ? data.slice(0, 22) : data,
          listTitle: title,
          listAuthor: author,
          showList: true,
          isShow: false
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
        this._getPlayList('hot')
        this.setData({
          isShow: false,
          showSongs: true
        })
        break
      case 2:
        this.getMultipleBoards()
        this.setData({
          isShow: false,
          showBoard: true
        })
        break
      case 3:
        this._getRecommendRadio()
        this.setData({
          isShow: false,
          showRadios: true
        })
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
    // this._getTop(26)

    setTimeout(() => {
      // console.log(this.data.newSongBoards)
      // console.log(this.data.hotSongBoards)
      // console.log(this.data.originalBoards)
      // console.log(this.data.soarSongBoards)
      // console.log(this.data.rapSongBoards)
      const newSongBoards = this.data.newSongBoards
      const hotSongBoards = this.data.hotSongBoards
      const originalBoards = this.data.originalBoards
      const soarSongBoards = this.data.soarSongBoards
      // const rapSongBoards = this.data.rapSongBoards

      const data = [newSongBoards, hotSongBoards, originalBoards, soarSongBoards]

      this.setData({
        boards: data
      })
    }, 3000)
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
  handleDailyPlay: function (e) {
    const index = e.detail.index
    this.setData({
      index: index,
      showPlay: true,
      showDaily: false
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
      showDaily: false
    })
  },

  /**
   * 播放返回
   */
  handlePlayGoBack: function () {
    this.setData({
      showPlay: false,
      showDaily: true
    })
  },

  /**
   * 歌单返回
   */
  handleSongGoBack: function () {
    this.setData({
      isShow: true,
      showSongs: false
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
  },

  /**
   * 歌单广场
   */
  handleGetHighQuality: function () {
    this._getHighQualityList()
  },
  
  /**
   * 歌单广场返回
   */
  handleParkSongGoBack: function () {
    this.setData({
      isShow: true,
      showSongsPark: false
    })
  },

  /**
   * 电台广场
   */
  handleGetRadiosPark: function () {
    this._getRecommendRadio()
    this.setData({
      isShow: false,
      showRadios: true
    })
  },

  /**
   * 电台广场返回
   */
  handleRadioGoBack: function () {
    this.setData({
      isShow: true,
      showRadios: false
    })
  },

  /**
   * 推荐歌单详情
   */
  handleGetDetail: function (e) {
    const id = e.detail.id

    this._getPlayListDetail(id)
  },
  
  /**
   * 推荐歌单播放
   */
  handleListPlay: function (e) {
    const index = e.detail.index
    this.setData({
      recommendList: this.data.list,
      index: index,
      showPlay: true,
      showList: false,
    })
  },

  /**
   * 推荐歌单详情返回
   */
  handleListGoBack: function () {
    this.setData({
      isShow: true,
      showList: false
    })
  }
})