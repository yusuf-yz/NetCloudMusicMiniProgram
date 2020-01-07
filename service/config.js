const baseURL = 'http://106.13.95.150:3000'

export {
  baseURL
}

// 添加时间戳
// export function timestamp (url) {
//   let getTimeStamp = new Date().getTime()

//   if (url.indexOf('?') < -1) {
//     url = url + '&time=' + getTimeStamp
//   } else {
//     url = url + '?time=' + getTimeStamp
//   }

//   return url
// }