import request from "./api.js"

export function getVerifyCode (phone) {
  return request({
    url: '/captcha/sent',
    data: {
      phone
    }
  })
}

export function verifyCode(phone, captcha) {
  return request({
    url: '/captcha/verify',
    data: {
      phone,
      captcha
    }
  })
}

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