// pages/login/login.js
Page({
  handleGetUserInfo(e){
    const {userInfo}=e.detail;
    wx.setStorageSync("userinfo", userInfo);
    const userinfo = wx.getStorageSync("userinfo");
    var username = "Hs-";
    var img = userinfo.avatarUrl;
    var addr = userinfo.country+userinfo.province+userinfo.city;
    var url = "http://localhost:8080/insertUser"; 
    console.log(username+img+addr+url);
    
    wx.request({
      url: url,
      data: {username,img,addr},
      header: {'content-type':'application/json'},
      method: 'POST',
      dataType: 'json'
    });  
    wx.navigateBack({
      delta:1
    }) 

  }
})