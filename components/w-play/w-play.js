// components/w-play/w-play.js
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
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
  /**
   * 返回
   */
    handleBack: function () {
      this.triggerEvent('goBack')
    },

    itemClick: function (e) {
      console.log(e)
    }
  }
})
