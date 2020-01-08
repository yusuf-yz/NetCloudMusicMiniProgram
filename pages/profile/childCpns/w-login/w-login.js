// pages/profile/login/login.js
import { getVerifyCode } from "../../../../service/profile.js"
import { verifyCode } from "../../../../service/profile.js"
import { loginByPhone } from "../../../../service/profile.js"
import { getLoginStatus } from "../../../../service/profile.js"
import { refreshLogin } from "../../../../service/profile.js"

const COOKIE = 'cookie'

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    userName: '',
    password: '',
    code: '',
    getCode: '获取验证码',
    disabled: false
  },

  /* ------------------- 生命周期 ------------------- */

  /**
   * 组件所在页面的生命周期
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
      this.triggerEvent('goBack')
    },

    /**
     * 用户名输入
     */
    handleUNameInput: function (e) {
      const userName = e.detail.value
      this.setData({
        userName
      })
    },
    
    /**
     * 密码输入
     */
    handlePWDInput: function (e) {
      const password = e.detail.value
      this.setData({
        password
      })
    },
    
    /**
     * 验证码输入
     */
    handleVCodeInput: function (e) {
      const code = e.detail.value
      this.setData({
        code
      })
    },
    
    /**
     * 倒计时
     */
    timer: function () {
      let time = 60
      let timer = setInterval(() => {
        time = time - 1
        if (time === 0) {
          clearInterval(timer)
          this.setData({
            getCode: '获取验证码',
            disabled: false
          })
        } else {
          this.setData({
            getCode: '还剩' + time + 'S',
            disabled: true
          })
        }
      }, 1000)
    },
    
    /**
     * 获取验证码
     */
    handleGetCode: function () {
      const phone = this.data.userName
      if (phone === '') {
        wx.showToast({
          title: '手机号不能为空',
          image: '/assets/image/profile/error.png'
        })
      } else if (!(/^1\d{10}$/.test(phone))) {
        wx.showToast({
          title: '手机号无效',
          image: '/assets/image/profile/error.png'
        })
      } else {
        this._getVerifyCode(phone)
        this.timer()
      }
    },

    /**
     * 获取验证码接口
     */
    _getVerifyCode: function (phone) {
      getVerifyCode(phone).then(res => {
        if (res.data.code === 200) {
        }
      })
    },
    
    /**
     * 登录
     */
    handleConfirm: function () {
      const phone = this.data.userName
      const password = this.data.password
      this._loginByPhone(phone, password)
    },

    /**
     * 手机号登录接口
     */
    _loginByPhone: function (phone, password) {
      loginByPhone(phone, password).then(res => {
        if (res.data.code === 200) {
          if (res.header && res.header['Set-Cookie']) {
            wx.setStorageSync(COOKIE, res.header['Set-Cookie'])
          }

          let nickname = res.data.profile.nickname
          let avatarUrl = res.data.profile.avatarUrl
          let backgroundUrl = res.data.profile.backgroundUrl
          let uid = res.data.profile.userId

          let data = { nickname: nickname, avatarUrl: avatarUrl, backgroundUrl: backgroundUrl, uid: uid }
          this.triggerEvent('comfirmLogin', data)
        }
      })
    },

    /**
     * 刷新登录
     */
    _refreshLogin: function () {
      refreshLogin().then(res => {
        if (res.data.code === 200) {
          console.log(res)
        }
      })
    },

    /**
     * 验证验证码
     */
    _verifyCode: function(phone, captcha) {
      verifyCode(phone, captcha).then(res => {
        if (res.data.code === 200) {
          this.triggerEvent('comfirmLogin')
        }
      })
    }
  }
})
