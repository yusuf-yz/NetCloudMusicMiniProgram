// pages/search/childCpns/w-index/w-index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    },
    inputPlace: {
      type: String,
      value: '请输入搜索内容'
    },
    histoty: {
      type: Array,
      value: []
    },
    result: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputValue: '',
    showHot: true,
    showResult: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleConfirm (e) {
      const data = { value: e, showHot: this.data.showHot, showResult: this.data.showResult }
      this.triggerEvent('inputConfirm', data, {})
    }
  }
})
