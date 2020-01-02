// components/w-play/w-play.js
const myAudio = wx.createInnerAudioContext()
import { getMusicComment } from '../../service/search.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    musicIfo: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    controls: [
      { icon: '/assets/image/play/love.png' },
      { icon: '/assets/image/play/left.png' },
      { icon: '/assets/image/play/play.png' },
      { icon: '/assets/image/play/right.png' },
      { icon: '/assets/image/play/comment.png' }
    ],
    isPlay: false, // 是否在播放
    startTime: '00:00', // 开始时间
    totalTime: '00:00', // 总时长
    curTime: 0, // 当前时间
    maxValue: 100, // 最大值
    hcomments: {}, // 精彩评论
    ncomments: {}, // 最新评论
  },

  /* ------------------ 生命周期 ------------------ */
  lifetimes: {

    /**
     * 挂载完成
     */
    attached: function () {
      console.log('组件进入页面')
      console.log(this.properties.musicIfo)
      const id = this.properties.musicIfo.id
      this._getMusicComment(id, 20)
      this.canPlay()
    },

    detached: function () {
      console.log('组件移除页面')
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

    /* ------------------ 页面操作 ------------------ */

    /**
     * 返回
     */
    handleBack: function () {
      myAudio.destroy()
      this.triggerEvent('playGoBack')
    },

    /**
     * 底部播放等控制按钮组
     */
    itemClick: function (e) {
      const index = e.currentTarget.dataset.index
      let src = 'controls[' + index + '].icon'

      switch (index) {
        case 0:
          break
        case 1:
          break
        case 2:
          console.log(this.data.isPlay)
          if (!this.data.isPlay) {
            myAudio.play()
            this.playMusic()
            console.log('开始')
          } else {
            myAudio.pause()
            this.pauseMusic()
            console.log('暂停')
          }
          break
        case 3:
          break
        case 4:
          break
        default:
          break
      }
    },

    /**
     * 拖动滑块
     */
    handleSliderChange: function (e) {
      let value = e.detail.value

      myAudio.seek(value)

      this.seekPlay()
    },

    /* ------------------ 接口相关 ------------------ */

    /**
     * 监听可以播放状态
     */
    canPlay: function () {
      myAudio.autoplay = true
      myAudio.src = this.data.musicIfo.musicUrl
      myAudio.onCanplay(() => {
        this.playMusic()
        this.endPlay()
      })
    },

    /**
     * 监听播放
     */
    playMusic: function () {
      myAudio.onPlay(() => {
        console.log('开始播放')
        this.timeUpdate()
        let src = 'controls[2].icon'
        this.setData({
          [src]: "/assets/image/play/pause.png",
          isPlay: true
        })
      })
    },

    /**
     * 监听暂停
     */
    pauseMusic: function () {
      myAudio.onPause(() => {
        console.log('暂停播放')
        let src = 'controls[2].icon'
        this.setData({
          [src]: "/assets/image/play/play.png",
          isPlay: false
        })
      })
    },

    /**
     * 监听播放进度更新
     */
    timeUpdate: function () {
      myAudio.onTimeUpdate(() => {

        let duration = myAudio.duration
        let currentTime = myAudio.currentTime

        let curTime = Math.round(currentTime)
        let maxValue = Math.round(duration)

        var t_minute = Math.floor(duration / 60)
        var t_seconds = Math.floor(duration % 60)

        t_minute = t_minute < 10 ? '0' + t_minute : t_minute
        t_seconds = t_seconds < 10 ? '0' + t_seconds : t_seconds

        var c_minute = Math.floor(currentTime / 60)
        var c_seconds = Math.floor(currentTime % 60)

        c_minute = c_minute < 10 ? '0' + c_minute : c_minute
        c_seconds = c_seconds < 10 ? '0' + c_seconds : c_seconds

        this.setData({
          maxValue: maxValue,
          totalTime: t_minute + ':' + t_seconds,
          curTime: curTime,
          startTime: c_minute + ':' + c_seconds
        })
      })
    },

    /**
     * 监听手动改变进度
     */
    seekPlay: function () {
      myAudio.onSeeking(() => {
        myAudio.duration
        myAudio.currentTime
        console.log('手动改变进度')
      })
    },

    /**
     * 监听自然播放结束
     */
    endPlay: function () {
      myAudio.onEnded(() => {
        console.log('播放结束')
        this.setData({
          isPlay: false
        })
      }) 
    },

    /**
     * 单曲评论
     */
    _getMusicComment: function (id, limit) {
      getMusicComment(id, limit).then(res => {
        if (res.data.code === 200) {
          console.log(res)
          const hcomments = res.data.hotComments
          const ncomments = res.data.comments

          this.setData({
            hcomments: hcomments,
            ncomments: ncomments
          })
        }
      })
    }
  }
})
