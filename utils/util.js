// environment
wx.environment = (api = '') => {
  return 'https://www.zqba.pro/app' + api
}
// pay
wx.pay = (obj) => {
  return new Promise((resolve, reject) => {
    let that = this
    wx.requestPayment({
      timeStamp: obj.timeStamp,
      nonceStr: obj.nonceStr,
      package: obj.package,
      signType: obj.signType,
      paySign: obj.sign,
      success(res) {
        resolve()
      },
      fail(res) {
        reject()
      }
    })
  })
}
// direct interception
wx.toFixed = (num, place) => {
  num = Math.floor(num * Math.pow(10, place)).toFixed(0) / Math.pow(10, place)
  return num.toFixed(place)
}
// format
Date.prototype.Format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S": this.getMilliseconds()
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
    }
  return fmt;
}