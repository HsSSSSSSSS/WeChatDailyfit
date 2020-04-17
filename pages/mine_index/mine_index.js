// pages/mine_index/mine_index.js
Page({
  data: {
    userinfo:{},
  },
  onShow(){
    var that = this
    const userinfo = wx.getStorageSync("userinfo");
    that.setData({
      userinfo,
    })    
    
      
  }
})