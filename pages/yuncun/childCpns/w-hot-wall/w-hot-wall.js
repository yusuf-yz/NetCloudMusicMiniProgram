// pages/yuncun/childCpns/w-hot-wall/w-hot-wall.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    month: 'Jan',
    day: '01'
  },

  lifetimes: {
    // 在组件实例进入页面节点树时执行
    attached: function () {
      this.getCurrentDate()
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
      let month = now[1]
      let day = now[2]
      this.setData({
        month: month,
        day: day
      })
    },

    /**
     * 获取热评
     */
    handleClick: function () {
      this.triggerEvent('getHotWall')
    }
  }
})
