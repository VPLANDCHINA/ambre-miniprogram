const app = getApp()
Component({
  properties: {
    title: {
      type: String,
      value: 'AMBRE',
    },
    showBack: {
      type: Boolean
    },
    showSearch: {
      type: Boolean
    },
    transparent: {
      type: Boolean
    },
    bgColor: {
      type: String,
      value: 'fff'
    },
    fontColor: {
      type: String,
      value: '222222'
    },
    goodsId: {
      type: Number,
      value: ''
    }
  },
  data: {
    statusBarHeight: null,
    titleBarHeight: null
  },
  attached() {
    this.getSystemInfo()
  },
  methods: {
    handleBack() {
      let pages = getCurrentPages();
      let prevPage = pages[pages.length - 2]
      if (prevPage) {
        wx.navigateBack({})
      } else {
        wx.switchTab({
          url: '/pages/index/index'
        })
      }
    },
    handleIndex() {
      wx.switchTab({
        url: '/pages/index/index',
        success() {
          let pages = getCurrentPages();
          pages[0].setData({
            active: 0
          })
        }
      })
    },
    getSystemInfo() {
      let that = this
      wx.getSystemInfo({
        success(res) {
          that.setData({
            statusBarHeight: res.statusBarHeight,
            titleBarHeight: res.screenWidth * 88 / 750
          })
        }
      })
    }
  }
})