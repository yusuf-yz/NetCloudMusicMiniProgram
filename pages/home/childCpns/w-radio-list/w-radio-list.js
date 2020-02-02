// pages/home/childCpns/w-radio-list/w-radio-list.js
import { getMusicUrl } from '../../../../service/search.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    radios: {
      type: Array,
      value: []
    },
    title: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /* ------------------ 生命周期 ------------------ */

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
     * 返回
     */
    handleBack: function () {
      this.triggerEvent('radioGoBack')
    },

    /**
     * 播放电台节目
     */
    handlePlay: function (data) {
      const id = data.currentTarget.dataset.id
      console.log(id)

      this._getMusicUrl(id)
    },

    /**
     * 播放地址
     */
    _getMusicUrl: function (id) {
      getMusicUrl(id).then(res => {
        if (res.data.code === 200) {
          console.log(res)
        }
      })
    }
  }
})
