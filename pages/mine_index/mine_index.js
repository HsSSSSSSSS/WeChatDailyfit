// pages/mine_index/mine_index.js
Page({
  data: {
    userinfo:{}
  },
  onShow(){
    const userinfo = wx.getStorageSync("userinfo");
    this.setData({
      userinfo
    })
      
  }
})