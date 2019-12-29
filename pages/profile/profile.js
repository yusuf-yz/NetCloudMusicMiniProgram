// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: '',
    userName: '',
    isLogin: false,
    menu: [
      { icon: '/assets/image/profile/friends.png', content: '我的好友' },
      { icon: '/assets/image/profile/Message.png', content: '我的消息' },
      { icon: '/assets/image/profile/clock.png', content: '音乐闹钟' },
      { icon: '/assets/image/profile/close.png', content: '附近的人' },
    ],
    showLoginForm: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  handleLogin: function () {
    this.setData({
      showLoginForm: !this.data.showLoginForm
    })
  },
  handleComfirmLogin: function (data) {
    console.log(data)
    const avatar = data.detail.avatarUrl
    const userName = data.detail.nickname
    this.setData({
      isLogin: true,
      avatar: avatar,
      userName: userName,
      showLoginForm: !this.data.showLoginForm
    })
  }
})