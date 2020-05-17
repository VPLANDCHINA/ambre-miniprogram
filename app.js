//app.js
import './utils/util.js'
App({
  onLaunch: function () {
    // login
    wx.login({
      success: res => {
        // send res.code get openId, sessionKey, unionId
      }
    })
    // get userInfo
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // If authorization can be directly exchanged for user information
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo
              // Prevent asynchronously adding callbacks
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  // watch function
  watch: function (ctx, obj) {
    Object.keys(obj).forEach(key => {
      this.observer(ctx.data, key, ctx.data[key], function (value) {
        obj[key].call(ctx, value)
      })
    })
  },
  observer: function (data, key, val, fn) {
    Object.defineProperty(data, key, {
      configurable: true,
      enumerable: true,
      get: function () {
        return val
      },
      set: function (newVal) {
        fn && fn(newVal)
        val = newVal
      },
    })
  },
  globalData: {
    userInfo: null
  }
})