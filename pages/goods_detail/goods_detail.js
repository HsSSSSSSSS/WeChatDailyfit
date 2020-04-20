// pages/goods_detail/goods_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    html:'<div id="modules-desc">       <div class="module-container hot_recommanded" data-spm="1998643877" data-panelshow="mtmalldetail.210.7" data-paneltap="mtmalldetail.210.8" style="display: none;"> <h3 class="module-title">店铺推荐</h3> <div class="module-content" data-desc-xtpl="mui/desc-mods/shoprecommend/index"> <div class="mdv-shoprecommend mui-shoprecommend" data-mod-name="mui/mdv/zebra" mdv-cls="mui/desc-mods/shoprecommend/index"> <div class="mui-shoprecommend-container"><div class="mui-shoprecommend-wrap muicell justify-content-between"></div> </div></div></div></div>          <div class="module-container image_text" data-spm=""> <h3 class="module-title" style="display: none;">图文</h3> <div class="module-content" data-desc-xtpl="mui/desc-mods/wpimagetext/index"> <div class="mui-wpimagetext mdv-wpimagetext" data-mod-name="mui/mdv/zebra" mdv-cls="mui/desc-mods/wpimagetext/index"> <div class="mui-wpimagetext-item"><img class="lazyImg" src="//img.alicdn.com/imgextra/i1/1774763675/O1CN01zuyykD1d1C8Eacs58_!!1774763675.jpg_760x760Q90s50.jpg_.webp" aria-label="商品详情图" data-spm-anchor-id="a222m.7628550.0.i2"></div></div> </div></div>          <div class="module-container image_text" data-spm=""> <h3 class="module-title" style="display: none;">图文</h3> <div class="module-content" data-desc-xtpl="mui/desc-mods/wpimagetext/index"> <div class="mui-wpimagetext mdv-wpimagetext" data-mod-name="mui/mdv/zebra" mdv-cls="mui/desc-mods/wpimagetext/index"><div class="mui-wpimagetext-item"><img class="lazyImg" src="//img.alicdn.com/imgextra/i1/1774763675/O1CN01G5AJkO1d1C8C5wQTr_!!1774763675.jpg_760x760Q90s50.jpg_.webp" aria-label="商品详情图"></div></div> </div></div>          <div class="module-container image_text" data-spm=""> <h3 class="module-title" style="display: none;">图文</h3> <div class="module-content" data-desc-xtpl="mui/desc-mods/wpimagetext/index"> <div class="mui-wpimagetext mdv-wpimagetext" data-mod-name="mui/mdv/zebra" mdv-cls="mui/desc-mods/wpimagetext/index"><div class="mui-wpimagetext-item"><img class="lazyImg" src="//img.alicdn.com/imgextra/i2/1774763675/O1CN01iXBMFs1d1C8GhukM2_!!1774763675.jpg_760x760Q90s50.jpg_.webp" aria-label="商品详情图"></div>      </div> </div></div>          <div class="module-container image_text" data-spm=""> <h3 class="module-title" style="display: none;">图文</h3> <div class="module-content" data-desc-xtpl="mui/desc-mods/wpimagetext/index">     <div class="mui-wpimagetext mdv-wpimagetext" data-mod-name="mui/mdv/zebra" mdv-cls="mui/desc-mods/wpimagetext/index">         <div class="mui-wpimagetext-item">        <img class="lazyImg" src="//img.alicdn.com/imgextra/i4/1774763675/O1CN01pmOKbl1d1C87gGupZ_!!1774763675.jpg_760x760Q90s50.jpg_.webp" aria-label="商品详情图">    </div>   </div> </div></div>          <div class="module-container image_text" data-spm=""> <h3 class="module-title" style="display: none;">图文</h3> <div class="module-content" data-desc-xtpl="mui/desc-mods/wpimagetext/index">   <div class="mui-wpimagetext mdv-wpimagetext" data-mod-name="mui/mdv/zebra" mdv-cls="mui/desc-mods/wpimagetext/index">     <div class="mui-wpimagetext-item">        <img class="lazyImg" src="//img.alicdn.com/imgextra/i3/1774763675/O1CN010AmFON1d1C8C6GAM6_!!1774763675.jpg_760x760Q90s50.jpg_.webp" aria-label="商品详情图">    </div>     </div> </div></div>          <div class="module-container image_text" data-spm=""> <h3 class="module-title" style="display: none;">图文</h3> <div class="module-content" data-desc-xtpl="mui/desc-mods/wpimagetext/index">   <div class="mui-wpimagetext mdv-wpimagetext" data-mod-name="mui/mdv/zebra" mdv-cls="mui/desc-mods/wpimagetext/index">        <div class="mui-wpimagetext-item">        <img class="lazyImg" src="//img.alicdn.com/imgextra/i2/1774763675/O1CN01bMUq5X1d1C86hwaPP_!!1774763675.jpg_760x760Q90s50.jpg_.webp" aria-label="商品详情图">    </div>    </div> </div></div>          <div class="module-container image_text" data-spm=""> <h3 class="module-title" style="display: none;">图文</h3> <div class="module-content" data-desc-xtpl="mui/desc-mods/wpimagetext/index">  <div class="mui-wpimagetext mdv-wpimagetext" data-mod-name="mui/mdv/zebra" mdv-cls="mui/desc-mods/wpimagetext/inde<div class="mui-wpimagetext-ite    <img class="lazyImg" src="//img.alicdn.com/imgextra/i4/1774763675/O1CN01zLplIl1d1C8E6m1j8_!!1774763675.jpg_760x760Q90s50.jpg_.webp" aria-label="商品详情</div>    </div> </div></div>          <div class="module-container image_text" data-spm=""> <h3 class="module-title" style="display: none;">图文</h3> <div class="module-content" data-desc-xtpl="mui/desc-mods/wpimagetext/index"> <div class="mui-wpimagetext mdv-wpimagetext" data-mod-name="mui/mdv/zebra" mdv-cls="mui/desc-mods/wpimagetext/index"><div class="mui-wpimagetext-item">   <img class="lazyImg" src="//img.alicdn.com/imgextra/i1/1774763675/O1CN01TgDMh61d1C86hw7Iq_!!1774763675.jpg_760x760Q90s50.jpg_.webp" aria-label="商品详情图">  </div>     </div> </div></div>          <div class="module-container image_text" data-spm=""> <h3 class="module-title" style="display: none;">图文</h3> <div class="module-content" data-desc-xtpl="mui/desc-mods/wpimagetext/index">   <div class="mui-wpimagetext mdv-wpimagetext" data-mod-name="mui/mdv/zebra" mdv-cls="mui/desc-mods/wpimagetext/index">     <div class="mui-wpimagetext-item">   <img class="lazyImg" src="//img.alicdn.com/imgextra/i1/1774763675/O1CN01fMFSt81d1C8CsRFEC_!!1774763675.jpg_760x760Q90s50.jpg_.webp" aria-label="商品详情图"> </div>       </div> </div></div>          <div class="module-container image_text" data-spm=""> <h3 class="module-title" style="display: none;">图文</h3> <div class="module-content" data-desc-xtpl="mui/desc-mods/wpimagetext/index">     <div class="mui-wpimagetext mdv-wpimagetext" data-mod-name="mui/mdv/zebra" mdv-cls="mui/desc-mods/wpimagetext/index">   <div class="mui-wpimagetext-item">        <img class="lazyImg" src="//img.alicdn.com/imgextra/i1/1774763675/O1CN01YirqEJ1d1C8ANThI4_!!1774763675.jpg_760x760Q90s50.jpg_.webp" aria-label="商品详情图">   </div>     </div> </div></div>          <div class="module-container image_text" data-spm=""> <h3 class="module-title" style="display: none;">图文</h3> <div class="module-content" data-desc-xtpl="mui/desc-mods/wpimagetext/index">  <div class="mui-wpimagetext mdv-wpimagetext" data-mod-name="mui/mdv/zebra" mdv-cls="mui/desc-mods/wpimagetext/index"><div class="mui-wpimagetext-item unloaded">         <img class="lazyImg" data-ks-lazyload="https://img.alicdn.com/imgextra/i3/1774763675/O1CN01h9gz3T1d1C89wUl46_!!1774763675.jpg" src="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAUAAAAALAAAAAACAAEAAAICBAoAOw==" aria-label="商品详情图">   </div>     </div> </div></div>          <div class="module-container image_text" data-spm=""> <h3 class="module-title" style="display: none;">图文</h3> <div class="module-content" data-desc-xtpl="mui/desc-mods/wpimagetext/index">  <div class="mui-wpimagetext mdv-wpimagetext" data-mod-name="mui/mdv/zebra" mdv-cls="mui/desc-mods/wpimagetext/index"><div class="mui-wpimagetext-item unloaded">        <img class="lazyImg" data-ks-lazyload="https://img.alicdn.com/imgextra/i1/1774763675/O1CN016qEdgp1d1C87gG2o1_!!1774763675.jpg" src="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAUAAAAALAAAAAACAAEAAAICBAoAOw==" aria-label="商品详情图">      </div>        </div> </div></div>          <div class="module-container image_text" data-spm=""> <h3 class="module-title" style="display: none;">图文</h3> <div class="module-content" data-desc-xtpl="mui/desc-mods/wpimagetext/index">  <div class="mui-wpimagetext mdv-wpimagetext" data-mod-name="mui/mdv/zebra" mdv-cls="mui/desc-mods/wpimagetext/index">    <div class="mui-wpimagetext-item unloaded">        <img class="lazyImg" data-ks-lazyload="https://img.alicdn.com/imgextra/i1/1774763675/O1CN01OnMMb91d1C89oUAra_!!1774763675.jpg" src="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAUAAAAALAAAAAACAAEAAAICBAoAOw==" aria-label="商品详情图"> </div>    </div> </div></div>          <div class="module-container image_text" data-spm=""> <h3 class="module-title" style="display: none;">图文</h3> <div class="module-content" data-desc-xtpl="mui/desc-mods/wpimagetext/index"> <div class="mui-wpimagetext mdv-wpimagetext" data-mod-name="mui/mdv/zebra" mdv-cls="mui/desc-mods/wpimagetext/index">   <div class="mui-wpimagetext-item unloaded">       <img class="lazyImg" data-ks-lazyload="https://img.alicdn.com/imgextra/i4/1774763675/O1CN01jY5Lll1d1C89oTdc3_!!1774763675.jpg" src="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAUAAAAALAAAAAACAAEAAAICBAoAOw==" aria-label="商品详情图">  </div>    </div> </div></div>          <div class="module-container image_text" data-spm=""> <h3 class="module-title" style="display: none;">图文</h3> <div class="module-content" data-desc-xtpl="mui/desc-mods/wpimagetext/index"> <div class="mui-wpimagetext mdv-wpimagetext" data-mod-name="mui/mdv/zebra" mdv-cls="mui/desc-mods/wpimagetext/index"><div class="mui-wpimagetext-item unloaded"><img class="lazyImg" data-ks-lazyload="https://img.alicdn.com/imgextra/i3/1774763675/O1CN01Acrve91d1C821lmLr_!!1774763675.jpg" src="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAUAAAAALAAAAAACAAEAAAICBAoAOw==" aria-label="商品详情图"></div>   </div> </div></div>          <div class="module-container image_text" data-spm=""> <h3 class="module-title" style="display: none;">图文</h3> <div class="module-content" data-desc-xtpl="mui/desc-mods/wpimagetext/index"> <div class="mui-wpimagetext mdv-wpimagetext" data-mod-name="mui/mdv/zebra" mdv-cls="mui/desc-mods/wpimagetext/index"><div class="mui-wpimagetext-item unloaded">       <img class="lazyImg" data-ks-lazyload="https://img.alicdn.com/imgextra/i3/1774763675/O1CN01Cw7c4Z1d1C89Wdary_!!1774763675.jpg" src="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAUAAAAALAAAAAACAAEAAAICBAoAOw==" aria-label="商品详情图">        </div>       </div> </div></div>          <div class="module-container custompriceDesc" data-spm="">  <div class="module-content" data-desc-xtpl="mui/desc-mods/custommodule/index"> <div class="mui-custommodule mdv-custommodule" data-mod-name="mui/mdv/zebra" mdv-cls="mui/desc-mods/custommodule/index"><div class="mui-custommodule-item unloaded"><img class="lazyImg" data-ks-lazyload="https://gw.alicdn.com/tfs/TB1k9XsQpXXXXXLXpXXXXXXXXXX-750-368.png" src="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAUAAAAALAAAAAACAAEAAAICBAoAOw==" aria-label="商品详情图"> </div> </div> </div></div>     </div>',
    goodsId: undefined,
    goodsName:'',
    goodsImg1:'',
    goodsImg2:'',
    goodsImg3:'',
    goodsImg4:'',
    goodsImg5:'',
    goodsPrice:'',
    count:'',
    isCollect: false
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    var that = this;
    this.setData({
      goodsId: options.goodsId
    });
    wx.request({
      url: 'http://localhost:8080/detail',
      data: {"goodsId":options.goodsId},
      method: 'GET',
      success: function(res) {
        var goods = res.data.goodsDetail;
        if(goods == undefined){
          var toastText = '获取数据失败';
          wx.showToast({
            title:toastText,
            icon:'',
            duration:2000
          });
        }else{
          that.setData({
            goodsName: goods.goodsName,
            goodsImg1: goods.goodsImg1,
            goodsImg2: goods.goodsImg2,
            goodsImg3: goods.goodsImg3,
            goodsImg4: goods.goodsImg4,
            goodsImg5: goods.goodsImg5,
            goodsPrice: goods.goodsPrice,
          })
        }
      },
      fail: () => {},
      complete: () => {}
    });
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
     
  // }
  //点击加入购物车
  handleCartAdd(e){
     var that = this
     var cartItems = wx.getStorageSync('cartItems') || []
     console.log(cartItems)
     //判断购物车缓存中是否已存在该货品
     var exist = cartItems.find(function (ele) {
       return ele.id === that.data.goodsId
     })
     if (exist) {
       //如果存在，则增加该货品的购买数量
       exist.quantity = parseInt(exist.quantity) + 1
     } else {
       //如果不存在，传入该货品信息
       cartItems.push({
         id: that.data.goodsId,
         quantity: 1,
         checked:true,
         price: that.data.goodsPrice,
         title: that.data.goodsName,
         goodsPicsInfo: that.data.goodsImg1
       })
     }
     //加入购物车数据，存入缓存
     wx.setStorage({
       key: 'cartItems',
       data: cartItems,
       success: function (res) {
         //添加购物车的消息提示框
         wx.showToast({
           title: "添加购物车",
           icon: "success",
           durantion: 2000
         })
       }
     })
   },
  handleCollect(e){
     var that = this
     var collect = wx.getStorageSync('collect') || []
     console.log(collect)
     //判断缓存中是否已存在该货品
     var exist = collect.find(function (ele) {
       return ele.id === that.data.goodsId
     })
     if (exist) {
     } else {
       //如果不存在，传入该货品信息
       collect.push({
         id: that.data.goodsId,
         isCollect:true,
         price: that.data.goodsPrice,
         title: that.data.goodsName,
         goodsPicsInfo: that.data.goodsImg1
       })
       var isCollect = true;
       that.setData({
        isCollect: isCollect
       })
     }
     wx.setStorage({
       key: 'collect',
       data: collect,
       success: function (res) {
         //添加购物车的消息提示框
         wx.showToast({
           title: "收藏成功",
           icon: "success",
           durantion: 2000
         })
       }
     })
  }
})