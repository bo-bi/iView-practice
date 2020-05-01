import { get, post, } from './index.js'

export const getUserData = (data) => {
  return get(`/coupon/getuserinfo/info`, data)
}
