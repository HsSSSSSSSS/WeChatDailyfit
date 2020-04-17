// pages/made1/made1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    basics: 0,
    num: 0,
    scroll: 0,
    height:'',
    weight:'',
    BMInum:0,
    buttons: [
      { id: 1, name: '塑形' },
      { id: 2, name: '减脂' }
    ],
    position:[
      { id: 1, name: '背部' },
      { id: 2, name: '肩臂' },
      { id: 3, name: '腰腹' },
      { id: 4, name: '臀腿' }
    ],
    week:[
      { id: 1, name: '2天' },
      { id: 2, name: '3天' },
      { id: 3, name: '4天' },
      { id: 4, name: '5天' },
    ],
    daily:[
      { id: 1, name: '10~20分钟' },
      { id: 2, name: '20~30分钟' }
    ],
    msg:'',
    mes:'',
    msgw:'',
    msgd:'',
    list:[],
    weekNum:'',
    userinfo:{},
  },
  scrollSteps() {
    this.setData({
      scroll: this.data.scroll == 3 ? 0 : this.data.scroll + 1
    })
  },
  goToPlan(e){

    var plan = "定制"
    var that = this;
    var type1 = that.data.buttons;
    var i = that.data.msg -1;
    var type = type1[i].name;
    console.log(type);

    var sort1 = that.data.position;
    var j = that.data.mes -1;
    var sort = sort1[j].name;   
    console.log(sort);


    var week1 = that.data.week;
    var daily1 = that.data.daily;
    var k = that.data.msgw -1;
    var l = that.data.msgd -1;
    var week = JSON.stringify(week1[k].name);
    var daily = JSON.stringify(daily1[l].name);
    var weekNum = 0;
    if(week1[k].name = '2天'){
      weekNum = 11
    }else if(week1[k].name = '3天'){
      weekNum = 6
    }else if(week1[k].name = '4天'){
      weekNum =5
    }else{
      weekNum = 4
    }
    that.setData({
      weekNum: weekNum,
    });

    wx.request({
      url: 'http://localhost:8080/motions',
      data: {type,sort},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res){
          var list = JSON.stringify(res.data.motionsList);
          const userinfo = wx.getStorageSync("userinfo");
          that.setData({
            userinfo,
          }) 
          var username = userinfo.nickName;
          var mid1 = res.data.motionsList[0].mid;
          var mid2 = res.data.motionsList[1].mid;
          var mid3 = res.data.motionsList[2].mid;
          var mid4 = res.data.motionsList[3].mid;
          var mid5 = res.data.motionsList[4].mid;
          var fate = week;
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
          var definition = plan;
          var totalFate = (that.data.msgw+1)*weekNum;
          wx.request({
            url: 'http://localhost:8080/insertPlan',
            data: {username,mid1,mid2,mid3,mid4,mid5,weekNum,fate,definition,totalFate},
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
          });
          wx.navigateTo({
            url: '/pages/course/course?list='+ list + '&week=' + week + '&daily=' + daily + '&plan=' + plan +'&weekNum='+weekNum
          })    
      },
      fail: () => {},
      complete: () => {}
    });  
  },
  handleHeightChange(e){
    this.setData({
      height:e.detail.value
    })
  },
  handleWeightChange(e){
    this.setData({
      weight:e.detail.value
    })
  },
  handleBMINum(e){
    const weight=this.data.weight;
    const height=this.data.height;
    this.setData({
      BMInum: parseInt(weight/((height/100)*(height/100)))
    })
   
  },
  radioButtonTap: function (e) {
    let id = e.currentTarget.dataset.id
    for (let i = 0; i < this.data.buttons.length; i++) {
      if (this.data.buttons[i].id == id) {
        //当前点击的位置为true即选中
        this.data.buttons[i].checked = true;
      }
      else {
        //其他的位置为false
        this.data.buttons[i].checked = false;
      }
    }
    this.setData({
      buttons: this.data.buttons,
      msg: id,
    })
  },
  positionButtonTap: function (e){
    let id = e.currentTarget.dataset.id;
    for (let i = 0; i < this.data.position.length; i++) {
      if (this.data.position[i].id == id) {
        //当前点击的位置为true即选中
        this.data.position[i].checked = true;
      }
      else {
        //其他的位置为false
        this.data.position[i].checked = false;
      }
    }
    this.setData({
      position: this.data.position,
      mes: id,
    })
  },
  weekButtonTap: function (e) {
    let id = e.currentTarget.dataset.id
    for (let i = 0; i < this.data.week.length; i++) {
      if (this.data.week[i].id == id) {
        //当前点击的位置为true即选中
        this.data.week[i].checked = true;
      }
      else {
        //其他的位置为false
        this.data.week[i].checked = false;
      }
    }
    this.setData({
      week: this.data.week,
      msgw: id
    })
  },
  dailyButtonTap: function (e) {
    let id = e.currentTarget.dataset.id
    for (let i = 0; i < this.data.daily.length; i++) {
      if (this.data.daily[i].id == id) {
        //当前点击的位置为true即选中
        this.data.daily[i].checked = true;
      }
      else {
        //其他的位置为false
        this.data.daily[i].checked = false;
      }
    }
    this.setData({
      daily: this.data.daily,
      msgd: id
    })
  },

})