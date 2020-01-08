import { baseURL } from './config.js'

export default function (options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options.url,
      method: options.method || 'get',
      data: options.data || {},
      header: wx.getStorageSync('cookie') ? { Cookie: wx.getStorageSync('cookie') } : { 'Content-Type': 'application/x-www-form-urlencoded'} ,
      success: resolve,
      fail: reject
    })
  })
}