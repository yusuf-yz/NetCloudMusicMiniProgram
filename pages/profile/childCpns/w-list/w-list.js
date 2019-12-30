// pages/profile/childCpns/w-list/w-list.js
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
      const index = e.currentTarget.dataset.index
      const data = {index: index}
      this.triggerEvent('listClick', data)
    }
  }
})
