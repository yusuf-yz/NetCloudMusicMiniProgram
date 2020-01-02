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
    musicIfo: {
      id: '',
      name: "",
      author: "",
      musicUrl: "",
      imageUrl: ""
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    playMusic: function (e) {
      const id = e.currentTarget.dataset.id

      this._getMusicUrl(id)
      this._getMusicDetail(id)

      this.setData({
        "musicIfo.id": id
      })

      const data = this.data.musicIfo

      setTimeout(() => {
        this.triggerEvent('getMusicIfo', data)
      }, 300)
    },

    // ---------------- 接口 ----------------

    /**
     * 播放地址
     */
    _getMusicUrl: function (id) {
      getMusicUrl(id).then(res => {
        if (res.data.code === 200) {
          const musicUrl = res.data.data[0].url

          this.setData({
            "musicIfo.musicUrl": musicUrl
          })
        }
      })
    },

    /**
     * 详情
     */
    _getMusicDetail: function (ids) {
      getMusicDetail(ids).then(res => {
        if (res.data.code === 200) {
          const data = res.data.songs[0]
          const name = data.name
          const author = data.al.name
          const imageUrl = data.al.picUrl

          this.setData({
            "musicIfo.name": name,
            "musicIfo.author": author,
            "musicIfo.imageUrl": imageUrl
          })
        }
      })
    }
  }
})
