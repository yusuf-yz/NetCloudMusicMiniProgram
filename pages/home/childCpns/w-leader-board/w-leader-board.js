// pages/home/childCpns/w-leader-board/w-leader-board.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    boards: {
      type: Object,
      value: {},
      observer: function (newVal, oldVal) {
        // console.log(newVal)
        // console.log(oldVal)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list: {},
    thursdayUpdate: '每周四更新',
    dayUpdate: '每日更新',
    index: 0,
    isShow: true,
    showPlay: false, // 播放
    boardPoster: '', // 排行榜海报
    showBoardList: false, // 排行榜列表页
    boardList: {}, // 排行榜歌曲
  },

  /* ------------------ 生命周期 ------------------ */

  lifetimes: {
    attached: function () {
      setTimeout(() => {
        // console.log(this.properties.boards)
        this.setData({
          list: this.properties.boards
        })
      }, 1000)
    },
  },

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
    /**
     * 打开榜单
     */
    handleOpenBoard: function (e) {
      console.log(e)
      const type = e.currentTarget.dataset.type

      const nBoardList = this.properties.boards[0].tracks
      const hBoardList = this.properties.boards[1].tracks
      const oBoardList = this.properties.boards[2].tracks
      const sBoardList = this.properties.boards[3].tracks

      const nBoardPoster = this.properties.boards[0].coverImgUrl
      const hBoardPoster = this.properties.boards[1].coverImgUrl
      const oBoardPoster = this.properties.boards[2].coverImgUrl
      const sBoardPoster = this.properties.boards[3].coverImgUrl

      // console.log(nBoardList)
      // console.log(hBoardList)
      // console.log(oBoardList)
      // console.log(sBoardList)

      switch (type) {
        case 'N':
          this.setData({
            boardList: nBoardList,
            boardPoster: nBoardPoster,
            showBoardList: true,
            isShow: false
          })
          break
        case 'H':
          this.setData({
            boardList: hBoardList,
            boardPoster: hBoardPoster,
            showBoardList: true,
            isShow: false
          })
          break
        case 'O':
          this.setData({
            boardList: oBoardList,
            boardPoster: oBoardPoster,
            showBoardList: true,
            isShow: false
          })
          break
        case 'S':
          this.setData({
            boardList: sBoardList,
            boardPoster: sBoardPoster,
            showBoardList: true,
            isShow: false
          })
          break
        default:
          break
      }
    },

    /**
     * 返回
     */
    handleBack: function () {
      this.triggerEvent('boardGoBack')
    },

    /**
     * 榜单列表返回
     */
    handleGoBack: function () {
      this.setData({
        showBoardList: false,
        isShow: true
      })
    },

    /**
     * 播放榜单
     */
    handleReadyPlay: function (e) {
      const index = e.detail.index
      this.setData({
        index: index,
        showPlay: true,
        showBoardList: false
      })
    },

    /**
     * 播放全部榜单
     */
    handlePlayAll: function () {
      const index = 0
      this.setData({
        index: index,
        showPlay: true,
        showBoardList: false
      })
    },

    /**
     * 播放返回
     */
    handlePlayGoBack: function () {
      this.setData({
        showPlay: false,
        showBoardList: true
      })
    }
  }
})
