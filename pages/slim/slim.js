// pages/slim/slim.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        value:"计划介绍",
        isActive:true
      },{
        id:1,
        value:"计划预览",
        isActive:false
      }
    ],
    plan_id:'',
    plan:'',
    sort:'',
    weekNum:6,
    fate:"3天",
    daily:"15分钟",
    userinfo:{},
    list:[]
  },
  handleTabsItemChange(e){
    const {index}=e.detail
    let {tabs}=this.data;
    tabs.forEach((v,i) =>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    })
  },
  onLoad: function (options) {
    var that = this;
    var plan_id = options.plan_id;
    var plan;
    var sort;
    that.setData({
      plan_id: plan_id
    });
    if(plan_id == 1){
      plan = "瘦肚子";
      sort = "腰腹"
    }else if(plan_id ==2){
      plan = "天鹅颈"
      sort = "背部"
    }else if(plan_id == 3){
      plan = "马甲线"
      sort = "腰腹"
    }else{
      plan = "瘦腿"
      sort = "臀腿"
    }
    that.setData({
      plan: plan,
      sort: sort
    });
    var type = "塑性";
    wx.request({
      url: 'http://localhost:8080/motions',
      data: {type,sort},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res){
          var list = res.data.motionsList;
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
      },
      fail: () => {},
      complete: () => {}
    });  
  },
  goToPlan(e){
    var that = this;
    const userinfo = wx.getStorageSync("userinfo");
    that.setData({
      userinfo,
    }) 
    var username = userinfo.nickName;
    console.log(username);
    var mid1 = that.data.list[0].mid;
    var mid2 = that.data.list[1].mid;
    var mid3 = that.data.list[2].mid;
    var mid4 = that.data.list[3].mid;
    var mid5 = that.data.list[4].mid;
    var weekNum = that.data.weekNum;
    var fate = that.data.fate;
    var daily = JSON.stringify(that.data.daily);
    var plan = that.data.plan;
    var definition = plan;
    
    var week =JSON.stringify(that.data.fate);
    var totalFate = 18;
    if(plan != null){
      wx.request({
        url: 'http://localhost:8080/findDefinition',
        data: {username,plan},
        header: {'content-type':'application/json'},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res){
            var check = res.data.success;
            if(check == true){
              var toastText = '您已加入该课程，请前往我的-我的课程查看哦';
              wx.showToast({
                title: toastText,
                icon: 'none',
                duration: 1500,
              });       
            }else{
              wx.request({
                url: 'http://localhost:8080/insertPlan',
                data: {username,mid1,mid2,mid3,mid4,mid5,weekNum,fate,definition,totalFate},
                header: {'content-type':'application/json'},
                method: 'GET',
                dataType: 'json',
                responseType: 'text',
              });
              var list = JSON.stringify(that.data.list);
              wx.navigateTo({
                url: '/pages/course/course?list='+ list + '&week=' + week + '&daily=' + daily + '&plan=' + plan +'&weekNum='+weekNum
              })  
            }
        },
        fail: () => {},
        complete: () => {}
      });  
    }
   
  },
})