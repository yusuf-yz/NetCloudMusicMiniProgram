// pages/search/childCpns/w-shot/w-shot.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
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
    itemClick: function (e) {
      const sname = e.currentTarget.dataset.sname
      const data = { sname: sname }
      this.triggerEvent('hSongItemClick', data, {})
    }
  }
})
