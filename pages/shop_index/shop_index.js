// pages/shop_index/shop_index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数组
    // swiperList:[]
    tabs:[
      {
        id:0,
        value:"综合",
        isActive:true
      },{
        id:1,
        value:"价格",
        isActive:false
      }
    ],
    list:[]
  },
  QueryParams:{
    query:"",
    cid:"",
    pagenum:1,
    pagesize:10
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
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/goods',
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res){
          var list = res.data.goodsList;
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
  
});