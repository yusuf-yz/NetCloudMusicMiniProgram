// pages/profile/childCpns/w-menu/w-menu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    menu: {
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
    itemClick: function(e) {
      const index = e.currentTarget.dataset.index
      const data = {index: index}
      this.triggerEvent('menuClick', data)
    }
  }
})
