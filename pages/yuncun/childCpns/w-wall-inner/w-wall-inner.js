// pages/yuncun/childCpns/w-wall-inner/w-wall-inner.js
const myAudio = wx.createInnerAudioContext()
import { getMusicUrl } from '../../../../service/search.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hotWallResult: {
      type: Object,
      value: {}
    }
  },
  /* ------------------ 生命周期 ------------------ */
  /**
   * 组件生命周期
   */
  lifetimes: {
    /**
     * 刚被创建
     */
    created: function () {

      setTimeout(() => {
        const id = this.properties.hotWallResult[0].simpleResourceInfo.songId
        console.log(id)
        wx.nextTick(() => {
          this._getMusicUrl(id)
        })
      }, 1000)
    }
  },

  /**
   * 组件所属页面生命周期
   */
  pageLifetimes: {
    hide: function () {
      this.handleClick()
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {

    /**
     * 返回
     */
    handleClick: function () {
      myAudio.destroy()
      this.triggerEvent('goBack')
    },

    /**
     * 滑动切换
     */
    handleChange: function (e) {
      const index = e.detail.current
      const id = this.properties.hotWallResult[index].simpleResourceInfo.songId
      setTimeout(() => {
        this._getMusicUrl(id)
      }, 500)
    },

    /**
     * 监听可以播放状态
     */
    canPlay: function (musicUrl) {
      myAudio.autoplay = true
      myAudio.loop = true
      myAudio.src = musicUrl
      myAudio.onCanplay(() => {
        this.playMusic()
      })
    },

    /**
     * 监听播放
     */
    playMusic: function () {
      myAudio.onPlay(() => {
        console.log('开始播放')
        myAudio.offCanplay()
        myAudio.offPlay()
      })
    },

    /**
     * 播放地址
     */
    _getMusicUrl: function (id) {
      getMusicUrl(id).then(res => {
        if (res.data.code === 200) {
          const musicUrl = res.data.data[0].url

          wx.nextTick(() => {
            this.canPlay(musicUrl)
          })
        }
      })
    }
  }
})
