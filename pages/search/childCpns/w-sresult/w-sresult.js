// pages/search/childCpns/w-sresult/w-sresult.js
import { getMusicUrl } from '../../../../service/search.js'
import { getMusicDetail } from '../../../../service/search.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    result: {
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
    playMusic: function (e) {
      const index = e.currentTarget.dataset.index
      this.triggerEvent('getMusicIfo', index)
    },

    // ---------------- 接口 ----------------

  }
})
