// pages/search/search.js
import { getHotsSearch } from '../../service/search.js'
import { getSearchResult } from '../../service/search.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hots: [], // 热门搜索列表
    inputPlace: '', // 搜索框默认值
    histoty: [], // 历史记录默认值
    result: [], // 搜索结果
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.获取热搜列表
    this._getHotsSearch()
  },

  // -------------- 网络请求函数 ---------------
  // 获取热搜列表
  _getHotsSearch() {
    getHotsSearch().then(res => {
      if (res.data.code === 200) {
        const hots = res.data.data
        let index = Math.floor(Math.random() * 20)
        let inputPlace = hots[index].searchWord
        let histoty = [hots[0].searchWord, hots[1].searchWord, hots[2].searchWord]
        
        this.setData({
          hots,
          inputPlace,
          histoty
        })
      }
    })
  },

  // -------------- 操作请求函数 ---------------
  _getSearchResult: function (keywords, limit) {
    getSearchResult(keywords, limit).then(res => {
      if (res.data.code === 200) {
        console.log(res)
        const result = res.data.result.songs

        this.setData({
          result
        })
      }
    })
  },
  handleInputConfirm: function (data) {
    const value = data.value.detail.detail.value
    const newHistory = this.data.histoty
    newHistory.splice(0, 1, value)
    this.setData({
      histoty: newHistory
    })

    this._getSearchResult(value, 12)
  }
})