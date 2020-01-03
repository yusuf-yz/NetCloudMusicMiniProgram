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
    index: '', // 索引
    showHot: true, // 热搜版
    showResult: false, // 搜索结果页
    showSearch: true, // 搜索页
    showPlay: false, // 播放页
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.获取热搜榜
    this._getHotsSearch()
  },

  // -------------- 接口 ---------------

  /**
   * 热搜榜
   */
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
          histoty: this.data.histoty.length === 0 ? histoty : this.data.histoty
        })
      }
    })
  },

  /**
   * 搜索结果
   */
  _getSearchResult: function (keywords, limit, type) {
    getSearchResult(keywords, limit, type).then(res => {
      if (res.data.code === 200) {
        const result = res.data.result.songs

        this.setData({
          result
        })
      }
    })
  },

  // -------------- 页面操作 ---------------

  /**
   * 返回
   */
  handleGoBack: function () {
    if (this.data.showResult) {
      this._getHotsSearch()
      this.setData({
        showHot: true,
        showResult: false
      })
    }
  },

  /**
   * 输入确认
   */
  handleInputConfirm: function (data) {
    const keywords = data.detail.value
    const dftKeywords = this.data.inputPlace
    const newHistory = this.data.histoty

    var flag = true

    newHistory.some(item => {
      if (item === keywords) {
        flag = false
        return false
      }
    })

    if (keywords === '') {
      this._getSearchResult(dftKeywords, 12, 1)
      if (flag) {
        newHistory.splice(2, 1)
        newHistory.splice(0, 0, dftKeywords)
      }
    } else {
      this._getSearchResult(keywords, 12, 1)
      if (flag) {
        newHistory.splice(2, 1)
        newHistory.splice(0, 0, keywords)
      }
    }

    this.setData({
      histoty: newHistory,
      showHot: false,
      showResult: true
    })
  },

  /**
   * 热搜榜单曲
   */
  handleHSongItemClick: function (data) {
    const keywords = data.detail.sname
    const newHistory = this.data.histoty
    var flag = true
    
    newHistory.some(item => {
      if (item === keywords) {
        flag = false
        return false
      }
    })
    if (flag) {
      newHistory.splice(2, 1)
      newHistory.splice(0, 0, keywords)
    }
    
    this._getSearchResult(keywords, 12, 1)
    this.setData({
      histoty: newHistory,
      showHot: false,
      showResult: true
    })
  },

  /**
   * 播放
   */
  handleGetMusicIfo: function (data) {
    const index = data.detail

    this.setData({
      index: index,
      showSearch: false,
      showPlay: true
    })
  },

  /**
   * 播放时返回
   */
  handlePlayGoBack: function () {
    this.setData({
      showSearch: true,
      showPlay: false
    })
  }
})