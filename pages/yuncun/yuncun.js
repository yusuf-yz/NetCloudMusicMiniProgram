// pages/yuncun/yuncun.js
import { getHotTopic } from '../../service/yuncun.js'
import { getHotWall } from '../../service/yuncun.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this._getHotTopic(20)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this._getHotTopic(20)
    this._getHotWall()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /* ---------------- 接口 ---------------- */
  /**
   * 热门话题
   */
  _getHotTopic: function (limit) {
    getHotTopic(limit).then(res => {
      if (res.data.code === 200) {
        console.log(res)
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
      }
    })
  }
})