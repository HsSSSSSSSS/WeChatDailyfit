// pages/myCourse/myCourse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{},
    planList:[],
    list:[],
    plan1:"定制",
    plan2: "马甲线",
    plan3:"瘦肚子",
    plan4:"天鹅颈",
    plan5:"瘦腿",
    planMsg:'',
    weekNum: '',
    week: '',
    daily: '',
    plan: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    const userinfo = wx.getStorageSync("userinfo");
          that.setData({
            userinfo,
          }) 
    var username = userinfo.nickName;
    wx.request({
      url: 'http://localhost:8080/planList',
      data: {username},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res){
          var planList = res.data.planList;
          if(planList ==null){
            var toastText = '获取数据失败';
            wx.showToast({
              title: toastText,
              icon: '',
              duration: 1500,
            });       
          }else{
            that.setData({
              planList: planList,
            });
          }
          
      },
      fail: () => {},
      complete: () => {}
    });  
  },
  GoToPlan(e){
    var that = this;
    var pid = e.currentTarget.dataset.id
    wx.request({
      url: 'http://localhost:8080/plan',
      data: {pid},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res){
          var weekNum = res.data.plan.weekNum;
          var week = JSON.stringify(res.data.plan.fate);
          var daily = JSON.stringify("20~30分钟");
          var plan = res.data.plan.definition;
          if(plan == null){
            var toastText = '获取数据失败';
            wx.showToast({
              title: toastText,
              icon: '',
              duration: 1500,
            });       
          }else{
            that.setData({
              weekNum: weekNum,
              week: weekNum,
              daily: daily,
              plan: plan
            });
          }
          wx.request({
            url: 'http://localhost:8080/goToPlan',
            data: {pid},
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: function(res){
                var list = JSON.stringify(res.data.motionList);
                if(list ==null){
                  var toastText = '获取数据失败';
                  wx.showToast({
                    title: toastText,
                    icon: '',
                    duration: 1500,
                  });       
                }else{
                  that.setData({
                    list: list,
                  });
                }
                wx.navigateTo({
                  url: '/pages/course/course?list='+ list + '&week=' + week + '&daily=' + daily + '&plan=' + plan +'&weekNum='+weekNum
                })    
            },
            fail: () => {},
            complete: () => {}
          });  
        },
        fail: () => {},
        complete: () => {}
      });  
   
  }
  
})