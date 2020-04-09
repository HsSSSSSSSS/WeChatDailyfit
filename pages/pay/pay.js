// pages/cart/cart.js
// 获取用户的收货地址功能
Page({
  data:{
    address:{},
    cart:[],
    totalPrice:0,
    totalNum:0
  },
  onShow(){
    const address=wx.getStorageSync("address");
    let cart = wx.getStorageSync("cartItems")||[];
    //过滤后的购物车数组
    cart = cart.filter(v=>v.checked);
    //总价格 总数量
    let totalPrice = 0;
    let totalNum = 0;
    cart.forEach(v => {
        totalPrice +=v.quantity*v.price; 
        totalNum +=v.quantity;
    });
    this.setData({
      address,
      cart,
      totalPrice,
      totalNum
    })      
  },
  handlePay(){
    wx.showToast({
      title: "支付成功",
      icon: "success",
      durantion: 2000,
      success: function () {
        wx.navigateTo({
            url: '/pages/cart/cart',
          })
      }
    })
  }
})