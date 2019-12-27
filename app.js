const TOKEN = 'token'
// 注册一个小程序实例
App({
  // 对象存在内存中，小程序关闭后就被回收
  globalData: {
    token: ''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 异步调用

    // 1.先从缓存中取出token
    const token = wx.getStorageSync(TOKEN)

    // 2.判断token是否有值
    if (token && token.length !== 0) { // 已经有token，验证token是否过期
      this.checkToken(token)
    } else { // 没有token，进行登录操作
      this.login()
    }
  },
  /**
   * 登录
   */
  login: function () {
    wx.login({
      success: (res) => {
        // 1.获取code
        const code = res.code

        // 2.将code发送给服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            // 1.取出token
            const token = res.data.token

            // 2.将token保存在globalData中
            this.globalData.token = token

            // 3.进行本地存储
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  },
  /**
   * 验证token是否过期
   */
  checkToken: function (token) {
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: (res) => {
        if (!res.data.errCode) {
          this.globalData.token = token
        } else {
          this.login()
        }
      },
      fail: (res) => {
      }
    })
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // console.log(options)
  }, 

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    // console.log('界面隐藏')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  }
})
