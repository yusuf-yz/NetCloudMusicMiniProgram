// pages/home/childCpns/w-leader-board/w-leader-board.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    boards: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list: {}
  },

  lifetimes: {
    created: function () {
      console.log(this.properties.boards)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
