// components/w-list/w-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '未命名歌单'
    },
    author: {
      type: String,
      value: '未知作者'
    },
    list: {
      type: Array,
      value: []
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
    handleBack: function () {
      this.triggerEvent('goBack')
    },

    /**
     * 播放
     */
    handlePlay: function (e) {
      console.log(e)
      const index = e.currentTarget.dataset.index
      // const data = {index: index}

      this.triggerEvent('readyPlay', {index})
    }
  }
})
