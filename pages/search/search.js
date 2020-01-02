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
    musicIfo: {}, // 单曲详情
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
          histoty
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

    if (keywords === '') {
      this._getSearchResult(dftKeywords, 12, 1)
      newHistory.splice(0, 1, dftKeywords)
    } else {
      this._getSearchResult(keywords, 12, 1)
      newHistory.splice(0, 1, keywords)
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
    newHistory.splice(0, 1, keywords)

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
    // console.log(data.detail)
    const musicIfo = data.detail

    this.setData({
      musicIfo: musicIfo,
      showSearch: false,
      showPlay: true
    })

    // console.log(this.data.musicIfo)
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