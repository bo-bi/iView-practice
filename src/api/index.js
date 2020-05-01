import apiAddress from './address'
import axios from 'axios'
import Vue   from 'vue'

function get(path, params) {
  if (typeof params !== "object") params = {};
  if (window._env_ == "development") {
    params.debug = 1
  }
  return axios.get(`${apiAddress}${path}`, { params }).then(res => {
    if (res.data.error > 0) {
      delError(res.data.error, res.data.msg)
      let err = new Error(`${res.data.msg}`)
      console.log(res.data.error, res.data.msg)
      Vue.prototype.$Message.error(res.data.msg)
      return Promise.reject(res.data.msg)
    }
    return res.data.data
  })
}

function post(path, data = {}, isJson) {
  if (window._env_ == "development") {
    path += `?debug=1`
  }
  data = stringify(data)
  return axios.post(`${apiAddress}${path}`, data, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  }).then(res => {
    if (res.data.error > 0) {
      delError(res.data.error, res.data.msg)
      let err = new Error(`${res.data.msg}`)
      Vue.prototype.$Message.error(res.data.msg)
      return Promise.reject(res.data.msg)
    }
    return res.data.data
  })
}

function stringify(data) {
  let result = []
  for (const key in data) {
    let c = data[key]
    if (c instanceof Array) {
      c = JSON.stringify(c)
    }
    c = encodeURIComponent(c)
    result.push(`${encodeURIComponent(key)}=${c}`)
  }
  return result.join('&')
}

export {
  get,
  post,
}
