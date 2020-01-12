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
    dayUpdate: '每日更新'
  },

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
   * 组件的方法列表
   */
  methods: {
    /**
     * 打开榜单
     */
    handleOpenBoard: function (e) {
      console.log(e)
    },

    /**
     * 返回
     */
    handleBack: function () {
      this.triggerEvent('boardGoBack')
    }
  }
})
