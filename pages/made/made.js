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
      { id: 1, name: '塑性' },
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
      { id: 2, name: '20~30分钟' },
    ],
    msg:'',
    mes:'',
    msgw:'',
    msgd:''


  },
  scrollSteps() {
    this.setData({
      scroll: this.data.scroll == 3 ? 0 : this.data.scroll + 1
    })
  },
  goToPlan(){
    wx.navigateTo({
      url: '/pages/course/course'
    })      
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
      msg: "id:"+id
    })
  },
  positionButtonTap: function (e){
    let id = e.currentTarget.dataset.id
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
      mes: "id:"+id
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
      msgw: "id:"+id
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
      msgd: "id:"+id
    })
  },
})