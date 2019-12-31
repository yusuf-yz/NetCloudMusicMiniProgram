// pages/search/childCpns/w-sinput/w-sinput.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    inputPlace: {
      type: String,
      value: '请输入搜索内容'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputValue: ''
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
     * 输入
     */
    handleInput: function (e) {
      const value = e.detail.value

      this.setData({
        inputValue: value
      })
    },

    /**
     * 确认
     */
    handleConfirm: function () {
      console.log(this.data.inputValue)
      const value = this.data.inputValue
      const data = { value: value }
      this.triggerEvent('inputConfirm', data, {})
    }
  }
})
