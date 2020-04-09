// pages/social_index/social_index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        value:"推荐动态",
        isActive:true
      },{
        id:1,
        value:"热门文章",
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
  },
})