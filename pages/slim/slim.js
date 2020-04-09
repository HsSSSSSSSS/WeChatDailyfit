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
  },
  handleTabsItemChange(e){
    const {index}=e.detail
    let {tabs}=this.data;
    tabs.forEach((v,i) =>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    })
  }
})