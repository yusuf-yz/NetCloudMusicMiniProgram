// pages/home/childCpns/w-recommend/w-recommend.js
import { getHighQualityList } from '../../../../service/home.js'
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
    /* ----------------- 操作 ----------------- */

    /**
     * 歌单广场
     */
    handleClick: function () {
      this.triggerEvent('getHighQuality')
    },

    /**
     * 歌单详情
     */
    handleGetDetail: function (e) {
      const id = e.currentTarget.dataset.id
      this.triggerEvent('getDetail', {id})
    }
  }
})
