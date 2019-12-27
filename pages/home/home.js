// pages/home/home.js
import { getBanner } from '../../service/home.js'
import { getRecommend } from '../../service/home.js'
import { getHotRadio } from '../../service/home.js'
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

    // 3.请求上架新碟
    this._getHotRadio(3)
  },

  // -------------- 网络请求函数 ---------------
  // 获取banners
  _getBanner(type) {
    getBanner(type).then(res => {
      if (res.data.code === 200) {
        const banners = res.data.banners

        this.setData({
          banners
        })
      }
    })
  },

  // 获取推荐歌单
  _getRecommend(limit) {
    getRecommend(limit).then(res => {
      if (res.data.code === 200) {
        const recommends = res.data.result

        this.setData({
          recommends
        })
      }
    })
  },

  // 获取热门电台
  _getHotRadio(limit) {
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
  handletabClick: function(e) {
    
    const index = e.detail.index
    console.log(index)
  }
})