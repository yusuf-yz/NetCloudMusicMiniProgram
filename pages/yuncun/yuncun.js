// pages/yuncun/yuncun.js
import { getHotTopic } from '../../service/yuncun.js'
import { getHotWall } from '../../service/yuncun.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotWallResult: {},
    hotTopicResult: {},
    isShow: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getHotTopic(10)
  },


  /* ---------------- 操作 ---------------- */

  /**
   * 获取云村热评
   */
  handleGetHotWall: function () {
    this._getHotWall()
    this.setData({
      isShow: !this.data.isShow
    })
  },

  /**
   * 返回
   */
  handleGoBack: function () {
    this.setData({
      isShow: !this.data.isShow
    })
  },


  /* ---------------- 接口 ---------------- */
  /**
   * 热门话题
   */
  _getHotTopic: function (limit) {
    getHotTopic(limit).then(res => {
      if (res.data.code === 200) {
        console.log(res)
        const data = res.data.hot

        this.setData({
          hotTopicResult: data
        })
      }
    })
  },

  /**
   * 云村热评
   */
  _getHotWall: function () {
    getHotWall().then(res => {
      if (res.data.code === 200) {
        console.log(res)
        const data = res.data.data

        this.setData({
          hotWallResult: data
        })
      }
    })
  }
})