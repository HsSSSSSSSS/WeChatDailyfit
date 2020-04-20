var app = getApp();
var calendarSignData;
var date;
var calendarSignDay;
Page({
  data:{
    vImg:'http://xysj.cditv.cn/2015/1125/20151125030520826.jpeg',
    userinfo:{}
  },

  //事件处理函数
  calendarSign: function() {
   calendarSignData[date]=date;
    console.log(calendarSignData);
    calendarSignDay=calendarSignDay+1;
   wx.setStorageSync("calendarSignData",calendarSignData);
   wx.setStorageSync("calendarSignDay",calendarSignDay);
 
   wx.showToast({
  title: '签到成功',
  icon: 'success',
  duration: 2000
})
  this.setData({   
        calendarSignData:calendarSignData,
        calendarSignDay:calendarSignDay
      })

      var that = this;
      var count = that.data.calendarSignDay;
      wx.request({
        url: 'http://localhost:8080/findVividImg',
        data: {count},
        header: {'content-type':'application/json'},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res){
            var vImg = res.data.vividImg;
            that.setData({
              vImg: vImg
            }) 
            const userinfo = wx.getStorageSync("userinfo");
            that.setData({
              userinfo,
            }) 
            var username = userinfo.nickName;
            wx.request({
              url: 'http://localhost:8080/updatePlan',
              data: {username},
              header: {'content-type':'application/json'},
              method: 'GET',
              success: function(res) {
                wx.request({
                  url: 'http://localhost:8080/fateList',
                  data: {username},
                  header: {'content-type':'application/json'},
                  method: 'GET',
                  success: function(res) {
                    var toastText = "恭喜您已完成 "+res.data.fateList+" 计划";
                    wx.showToast({
                      title: toastText,
                      icon: 'none',
                      duration: 1500,
                    });  
                      wx.request({
                        url: 'http://localhost:8080/deletePlan',
                        data: {username},
                        header: {'content-type':'application/json'},
                        method: 'GET',
                        success: function(res) {  
                        },
                        fail: () => {},
                        complete: () => {}
                      }); 
                  },
                  fail: () => {},
                  complete: () => {}
                }); 
              },
              fail: () => {},
              complete: () => {}
            }); 
        },
        fail: () => {},
        complete: () => {}
      });  
  },
  onLoad: function () {
    var mydate=new Date();
    var year=mydate.getFullYear();
    var month=mydate.getMonth()+1;
    date=mydate.getDate();
    console.log("date"+date)
    var day=mydate.getDay();
    console.log(day-1)
    var nbsp=7-((date-day)%7);
    console.log("nbsp"+nbsp);
    var monthDaySize;
    if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
      monthDaySize=31;
    }else if(month==4||month==6||month==9||month==11){
      monthDaySize=30;
    }else if(month==2){
       // 计算是否是闰年,如果是二月份则是29天
      if((year-2000)%4==0){
        monthDaySize=29;
      }else{
        monthDaySize=28;
      }
    };
    // 判断是否签到过
    if(wx.getStorageSync("calendarSignData")==null||wx.getStorageSync("calendarSignData")==''){
      wx.setStorageSync("calendarSignData",new Array(monthDaySize));
    };
     if(wx.getStorageSync("calendarSignDay")==null||wx.getStorageSync("calendarSignDay")==''){
      wx.setStorageSync("calendarSignDay",0);
    }
     calendarSignData=wx.getStorageSync("calendarSignData")
      calendarSignDay=wx.getStorageSync("calendarSignDay")
    console.log(calendarSignData);
    console.log(calendarSignDay)
    this.setData({
        year:year,
        month:month,
        nbsp:nbsp,
        monthDaySize:monthDaySize,
        date:date,
        calendarSignData:calendarSignData,
        calendarSignDay:calendarSignDay
      })
      var that = this;
      var count = that.data.calendarSignDay;
      wx.request({
        url: 'http://localhost:8080/findVividImg',
        data: {count},
        header: {'content-type':'application/json'},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res){
            var vImg = res.data.vividImg;
            that.setData({
              vImg: vImg
            }) 
          },
          fail: () => {},
          complete: () => {}
        });  
  }
})