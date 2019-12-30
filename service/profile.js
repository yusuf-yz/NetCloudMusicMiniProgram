import request from "./api.js"

/**
 * 获取验证码
 */
export function getVerifyCode (phone) {
  return request({
    url: '/captcha/sent',
    data: {
      phone
    }
  })
}

/**
 * 验证验证码
 */
export function verifyCode(phone, captcha) {
  return request({
    url: '/captcha/verify',
    data: {
      phone,
      captcha
    }
  })
}

/**
 * 手机号登录
 */
export function loginByPhone(phone, password) {
  return request({
    url: '/login/cellphone',
    method: 'post',
    data: {
      phone,
      password
    }
  })
}

/**
 * 通知
 */
export function getMessage(limit, offset) {
  return request({
    url: '/msg/notices',
    data: {
      limit,
      offset
    }
  })
}

/**
 * 签到
 */
export function signIn() {
  return request({
    url: '/daily_signin'
  })
}

/**
 * 私信
 */
export function privateMsg(limit, offset) {
  return request({
    url: '/msg/private',
    data: {
      limit,
      offset
    }
  })
}

/**
 * 我的关注
 */
export function myFollows(uid, limit, offset) {
  return request({
    url: '/user/follows',
    data: {
      uid,
      limit,
      offset
    }
  })
}

/**
 * 我的粉丝
 */
export function myFolloweds(uid, limit, offset) {
  return request({
    url: '/user/followeds',
    data: {
      uid,
      limit,
      offset
    }
  })
}

/**
 * 我的动态
 */
export function myEvent(uid, limit, lasttime) {
  return request({
    url: '/user/event',
    data: {
      uid,
      limit,
      lasttime
    }
  })
}

/**
 * 退出登录
 */
export function loginOut() {
  return request({
    url: '/logout'
  })
}