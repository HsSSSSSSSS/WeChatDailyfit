// pages/cart/cart.js
// 获取用户的收货地址功能
Page({
  data:{
    address:{},
    cart:[],
    allChecked:false,
    totalPrice:0,
    totalNum:0
  },
  onShow(){
    const address=wx.getStorageSync("address");
    const cart = wx.getStorageSync("cartItems")||[];
    //计算全选 
    // const allChecked = cart.length?cart.every(v=>v.checked):false;
    let allChecked = true;
    //总价格 总数量
    let totalPrice = 0;
    let totalNum = 0;
    cart.forEach(v => {
      if(v.checked){
        totalPrice +=v.quantity*v.price; 
        totalNum +=v.quantity;
      }else{
        allChecked = false;
      }
    });
    //判断数组是否为空
    allChecked = cart.length!=0?allChecked:false
    this.setData({
      address,
      cart,
      allChecked,
      totalPrice,
      totalNum
    })
      
  },
  // 点击收货地址
  handleChooseAddress(){
    // 获取权限
    wx.getSetting({
      success: (result) => {
        // 获取权限状态
        const scopeAddress = result.authSetting["scope.address"];
        if(scopeAddress===true||scopeAddress===undefined){
          wx.chooseAddress({
            success: (address) => {
              wx.setStorageSync("address", address);
            }
          });    
        }else{
          wx.openSetting({
            success: (result2) => {
              wx.chooseAddress({
                success: (result3) => {
                  // console.log(result3);
                }
              });   
            },
          });
            
        }


      },
      fail: () => {},
      complete: () => {}
    });

    
  },
  //商品的选中
  handleItemChange(e){
    //获取被修改的商品的id
    const id = e.currentTarget.dataset.id;
    //获取购物车数组
    let {cart} = this.data;
    let index = cart.findIndex(v=>v.id===id);
    cart[index].checked=!cart[index].checked;
    let allChecked = true;
    //总价格 总数量
    let totalPrice = 0;
    let totalNum = 0;
    cart.forEach(v => {
      if(v.checked){
        totalPrice +=v.quantity*v.price; 
        totalNum +=v.quantity;
      }else{
        allChecked = false;
      }
    });
    //判断数组是否为空
    allChecked = cart.length!=0?allChecked:false  
    this.setData({
      cart,
      totalPrice,
      totalNum,
      allChecked
    });
    wx.setStorageSync("cartItems", cart);
  },
  //商品的全选
  handleItemAllChange(){
    let {cart,allChecked} = this.data;
    allChecked = !allChecked;
    cart.forEach(v=>v.checked = allChecked);
    //总价格 总数量
    let totalPrice = 0;
    let totalNum = 0;
    cart.forEach(v => {
      if(v.checked){
        totalPrice +=v.quantity*v.price; 
        totalNum +=v.quantity;
      }else{
        allChecked = false;
      }
    });
    //判断数组是否为空
    allChecked = cart.length!=0?allChecked:false  
    this.setData({
      cart,
      totalPrice,
      totalNum, 
      allChecked  
    });
    wx.setStorageSync("cartItems", cart);
  },
  //商品数量的编辑
  handleItemNumEdit(e){
    const {operation,id} = e.currentTarget.dataset;
    let {cart} = this.data;
    const index = cart.findIndex(v=>v.id===id);
    //判断是否要执行删除
    if(cart[index].quantity===1&&operation===-1){
      wx.showModal({
        title: '提示',
        content: '您是否要删除',
        success: (result) => {
          if (result.confirm) {
            cart.splice(index,1);
            let allChecked = true;
            //总价格 总数量
            let totalPrice = 0;
            let totalNum = 0;
            cart.forEach(v => {
              if(v.checked){
                totalPrice +=v.quantity*v.price; 
                totalNum +=v.quantity;
              }else{
                allChecked = false;
              }
            });
            //判断数组是否为空
            allChecked = cart.length!=0?allChecked:false  
            this.setData({
              cart,
              totalPrice,
              totalNum,
              allChecked
            });
            wx.setStorageSync("cartItems", cart);
          }else if(result.cancel){
            console.log("用户点击取消");      
          }
        }
      });        
    }
    cart[index].quantity+=operation;
    let allChecked = true;
    //总价格 总数量
    let totalPrice = 0;
    let totalNum = 0;
    cart.forEach(v => {
      if(v.checked){
        totalPrice +=v.quantity*v.price; 
        totalNum +=v.quantity;
      }else{
        allChecked = false;
      }
    });
    //判断数组是否为空
    allChecked = cart.length!=0?allChecked:false  
    this.setData({
      cart,
      totalPrice,
      totalNum,
      allChecked
    });
    wx.setStorageSync("cartItems", cart);
  },
  handlePay(){
    const {address,totalNum}=this.data;
    //判断收货地址
    if(!address.userName){
      wx.showToast({
        title: '您还没有选择收货地址',
        icon: 'none',
        success :(res)=>{

        },
        fail:(err)=>{
          reject(err)
        }
      })
      return;
    }
    //判断用户有没有选购商品
    if(totalNum===0){
      wx.showToast({
        title: '您还没有选购商品',
        icon: 'none',
        success :(res)=>{

        },
        fail:(err)=>{
          reject(err)
        }
      })
      return;
    }
    //跳转到支付页面
    wx.navigateTo({
      url: '/pages/pay/pay',
    });
      
  }
})