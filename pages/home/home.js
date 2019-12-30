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
    showSearch: false
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

  // -------------- 网络请求函数 ---------------

  /**
   * 获取轮播图
   */
  _getBanner: function(type) {
    getBanner(type).then(res => {
      if (res.data.code === 200) {
        const banners = res.data.banners

        this.setData({
          banners
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
        console.log(res)
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
        console.log(res)
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

  // -------------- 事件监听函数 ---------------

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
    console.log(index)
    switch (index) {
      case 0:
        this._getDayRecommend()
        break
      case 1:
        this._getPlayList()
        break
      case 2:
        this._getTop(0)
        break
      case 3:
        this._getRadioTop(30, 0)
        break
      default:
        break
    }
  }
})