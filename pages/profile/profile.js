// pages/profile/profile.js
import { loginOut } from "../../service/profile.js"
import { getMessage } from "../../service/profile.js"
import { signIn } from "../../service/profile.js"
import { privateMsg } from "../../service/profile.js"
import { myFollows } from "../../service/profile.js"
import { myFolloweds } from "../../service/profile.js"
import { myEvent } from "../../service/profile.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: '',
    userName: '',
    uid: '',
    isLogin: false,
    list: [
      { image: '/assets/image/profile/a_message.png', content: '通知' },
      { image: '/assets/image/profile/sign.png', content: '签到' },
      { image: '/assets/image/profile/p_message.png', content: '私信' }
    ],
    menu: [
      { icon: '/assets/image/profile/attention.png', content: '我的关注' },
      { icon: '/assets/image/profile/fan.png', content: '我的粉丝' },
      { icon: '/assets/image/profile/moving.png', content: '我的动态' },
      { icon: '/assets/image/profile/change_account.png', content: '切换账号' }
    ],
    showLoginForm: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /* ------------------ 表单操作 ------------------ */

  /**
   * 立即登录
   */
  handleLogin: function () {
    this.setData({
      showLoginForm: !this.data.showLoginForm
    })
  },

  /**
   * 确定登录
   */
  handleComfirmLogin: function (data) {
    console.log(data)
    const avatar = data.detail.avatarUrl
    const userName = data.detail.nickname
    const uid = data.detail.uid

    this.setData({
      isLogin: true,
      avatar: avatar,
      userName: userName,
      uid: uid,
      showLoginForm: !this.data.showLoginForm
    })
  },

  /**
   * 水平菜单
   */
  handleListClick: function(data) {
    console.log(data)
    const index = data.detail.index
    switch (index) {
      case 0:
        this._getMessage(10, 0)
        break
      case 1:
        this._signIn()
        break
      case 2:
        this._privateMsg(10, 0)
        break
      default:
        break
    }
  },

  /**
   * 垂直菜单
   */
  handleMenuClick: function(data) {
    const uid = this.data.uid
    const index = data.detail.index
    switch (index) {
      case 0:
        this._myFollows(uid, 10, 0)
        break
      case 1:
        this._myFolloweds(uid, 10, 0)
        break
      case 2:
        this._myEvent(uid, 10, -1)
        break
      case 3:
        wx.showModal({
          title: '注销',
          content: '确定要退出当前账号？',
          success: res => {
            if (res.confirm) {
              console.log('退出成功')
              this._loginOut()
            }
          }
        })
        break
      default:
        break
    }
  },

  /* ------------------ 接口 ------------------ */

  /**
   * 通知
   */
  _getMessage: function(limit, offset) {
    getMessage(limit, offset).then(res => {
      if (res.data.code === 200) {
        console.log(res)
      } else if (res.data.code === 301) {
        wx.showToast({
          title: '请先登录',
          mask: true,
          image: '/assets/image/profile/error.png'
        })
      }
    })
  },

  /**
   * 签到
   */
  _signIn: function() {
    signIn().then(res => {
      if (res.data.code === 200) {
        console.log(res)
      } else if (res.data.code === 301) {
        wx.showToast({
          title: '请先登录',
          mask: true,
          image: '/assets/image/profile/error.png'
        })
      }
    })
  },

  /**
   * 私信
   */
  _privateMsg: function(limit, offset) {
    privateMsg(limit, offset).then(res => {
      if (res.data.code === 200) {
        console.log(res)
      } else if (res.data.code === 301) {
        wx.showToast({
          title: '请先登录',
          mask: true,
          image: '/assets/image/profile/error.png'
        })
      }
    })
  },

  /**
   * 我的关注
   */
  _myFollows: function(uid, limit, offset) {
    myFollows(uid, limit, offset).then(res => {
      if (res.data.code === 200) {
        console.log(res)
      } else {
        wx.showToast({
          title: '请先登录',
          mask: true,
          image: '/assets/image/profile/error.png'
        })
      }
    })
  },

  /**
   * 我的粉丝  
   */
  _myFolloweds: function(uid, limit, offset) {
    myFolloweds(uid, limit, offset).then(res => {
      if (res.data.code === 200) {
        console.log(res)
      } else {
        wx.showToast({
          title: '请先登录',
          mask: true,
          image: '/assets/image/profile/error.png'
        })
      }
    })
  },

  /**
   * 我的动态
   */
  _myEvent: function(uid, limit, lasttime) {
    myEvent(uid, limit, lasttime).then(res => {
      if (res.data.code === 200) {
        console.log(res)
      } else {
        wx.showToast({
          title: '请先登录',
          mask: true,
          image: '/assets/image/profile/error.png'
        })
      }
    })
  },
  
  /**
   * 退出登录
   */
  _loginOut: function() {
    loginOut().then(res => {
      if (res.data.code === 200) {
        this.setData({
          isLogin: false
        })
      }
    })
  }
})