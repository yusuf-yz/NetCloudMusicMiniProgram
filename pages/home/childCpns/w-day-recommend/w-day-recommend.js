// pages/home/childCpns/w-day-recommend/w-day-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    poster: {
      type: String,
      value: ''
    },
    recommendList: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentDay: ''
  },

  /* ------------------ 生命周期 ------------------ */
  /**
   * 组件生命周期
   */
  lifetimes: {
    attached: function () {
      this.getCurrentDate()
    }
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
     * 获取日期
     */
    getCurrentDate: function () {
      let now = new Date().toString().split(' ')
      let day = now[2]
      this.setData({
        currentDay: day
      })
    },

    /**
     * 返回
     */
    handleBack: function () {
      this.triggerEvent('goBack')
    },

    /**
     * 播放
     */
    handlePlay: function (e) {
      const index = e.currentTarget.dataset.index
      const data = {index: index}
      this.triggerEvent('readyPlay', data)
    },

    /**
     * 播放全部
     */
    handlePlayAll: function () {
      this.triggerEvent('playAll')
    }
  }
})
