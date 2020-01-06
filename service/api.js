import { baseURL } from './config.js'

let cookie = wx.getStorageSync('cookie')

export default function (options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options.url,
      method: options.method || 'get',
      data: options.data || {},
      header: cookie ? { Cookie: cookie } : { 'Content-Type': 'application/x-www-form-urlencoded'} ,
      success: resolve,
      fail: reject
    })
  })
}