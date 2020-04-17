// pages/write/write.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textareaAValue: '',
    modalName: null,
    imgList: [],
    mes:{},
    tempFilePaths:[],
    temp:0,
  },
  textareaAInput(e) {
    this.setData({
      textareaAValue: e.detail.value
    })
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '提示',
      content: '确定要删除这张照片吗？',
      cancelText: '取消',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
  ChooseImage() {
    var that = this;
    wx.chooseImage({
      count: 9, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        that.setData({
          tempFilePaths: that.data.tempFilePaths.concat(res.tempFilePaths)//在已有的基础上进行拼接
        })
        that.upload();
        that.setData({
          temp: that.data.tempFilePaths.length//用来解决 for 循环比 异步 快
        })
      }
    });
  },  
  upload:function(){
      for (var i = 0; i < this.data.tempFilePaths.length; i++) {
        // console.log("000")
        this.upload_file(this.data.tempFilePaths[i])
      }
    },
    upload_file: function (filepath) {
      var that = this;
    wx.uploadFile({
      url: 'https://***********************/imgs',
      header: {
        'content-type': 'multipart/form-data'
      },
      filePath: filepath,
      name: 'file',
      formData: {
        file: filepath
      },
    success:function(res){
      that.setData({
        mes:JSON.parse(res.data),
        imgList: that.data.imgList.concat(JSON.parse(res.data).data.filePath)//把字符串解析成对象
      })
      console.log(that.data.mes.data.filePath)
      console.log(that.data.imgList.length + "**********")
      // wx.showToast({
      //   title: 'success',
      // })
  },
  fail: function (res) {
    wx.showToast({
      title: '图片加载失败',
    })
  }
  })
  },
  changeSocial(){
    wx.switchTab({
      url: '/pages/social_index/social_index'
    });   
  }
})