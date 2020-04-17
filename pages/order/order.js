// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },
  onLoad(options){
    console.log(options);
  },
  handleTabsItemChange(e){
    const {index}=e.detail
    let {tabs}=this.data;
    tabs.forEach((v,i) =>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    const userinfo = wx.getStorageSync("userinfo");
    var username = userinfo.nickName;
    wx.request({
      url: 'http://localhost:8080/orderList',
      data: {"username":username},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res){
          var list = res.data.orderList;
          if(list ==null){
            var toastText = '获取数据失败';
            wx.showToast({
              title: 'toastText',
              icon: '',
              duration: 1500,
            });       
          }else{
            that.setData({
              list: list
            });
          }
      },
      fail: () => {},
      complete: () => {}
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})