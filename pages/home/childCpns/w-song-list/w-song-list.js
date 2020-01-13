// pages/home/childCpns/w-song-list/w-song-list.js
import { getPlayListDetail } from '../../../../service/home.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    songs: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list: [], // 歌单中歌曲详情
    title: '', // 歌单标题
    author: '', // 歌单作者
    isShow: true, // 歌单主页
    showList: false, // 歌曲列表页
    showPlay: false, // 播放页
    index: 0
  },

  /* ------------------ 生命周期 ------------------ */

  /**
   * 组件所属页面生命周期
   */
  pageLifetimes: {
    hide: function () {
      this.handleBack()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /* --------------------- 操作 --------------------- */
    /**
     * 返回
     */
    handleBack: function () {
      this.triggerEvent('songGoBack')
    },

    /**
     * 获取某个歌单详情
     */
    handleGetDetail: function (e) {
      const id = e.currentTarget.dataset.id

      this._getPlayListDetail(id)
    },

    /**
     * 歌单详情页返回
     */
    handleGoBack: function () {
      this.setData({
        showList: false,
        isShow: true
      })
    },

    /**
     * 准备播放
     */
    handleReadyPlay: function (e) {
      const index = e.detail.index
      this.setData({
        index,
        showList: false,
        showPlay: true
      })
    },

    /**
     * 播放返回
     */
    handlePlayGoBack: function () {
      this.setData({
        showList: true,
        showPlay: false
      })
    },


    /* --------------------- 接口 --------------------- */
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
            title: title,
            author: author,
            showList: true,
            isShow: false
          })
        }
      })
    }
  }
})
