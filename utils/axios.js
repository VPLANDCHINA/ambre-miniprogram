import './util.js'
const base = wx.environment()
let pending = []
wx.axios = function axios(api, data = {}, extra = {
  method: 'GET',
  wait: false,
  loading: true,
  fullPath: null
}) {
  const { method, wait, loading, fullPath } = extra
  return new Promise((resolve, reject) => {
    let header = { Authorization: wx.getStorageSync('tokenHead') + wx.getStorageSync('token') }
    if (loading) {
      wx.showLoading({
        title: '加载中...'
      })
    }
    if (pending.indexOf(api) === -1 || !wait) {
      pending.push(api)
      wx.request({
        url: fullPath || base + api,
        method,
        header,
        data: data,
        success(res) {
          pending.splice(pending.indexOf(api), 1)
          wx.stopPullDownRefresh()
          if (loading) { wx.hideLoading() }
          // Blocking depends on the return value of the server
          // 拦截CODE根据服务端业务而定
          if (res.statusCode === 200) {
            if (res.data.code === 200) {
              resolve(res.data)
            } else if (res.data.code === 401) {
              wx.navigateTo({
                url: '/pages/login/login'
              })
            } else {
              wx.showToast({ title: res.data.message, icon: 'none' })
              reject()
            }
          } else {
            wx.showToast({ title: res.data.message, icon: 'none' })
            reject()
          }
        },
        fail(res) {
          pending.splice(pending.indexOf(api), 1)
          wx.stopPullDownRefresh()
          if (loading) { wx.hideLoading() }
          wx.showToast({ title: res.errMsg, icon: 'none' })
          reject()
        }
      })
    } else {
      wx.showToast({
        title: '您请求的太频繁了哦亲~',
        icon: 'none'
      })
      reject()
    }
  })
}