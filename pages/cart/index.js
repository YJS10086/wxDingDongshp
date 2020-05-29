// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cart:{},
    allChecked:false,
    //总数量
    totalPrice:0,
    totalNum:0
  },
  onshow(){
    const cart = wx.getStorageSync("cart")||[];
    //every 数组方法 接收一个回调函数 
    //都为true，则返回true
    //一个返回false，则不再运行，返回false
    // const allChecked=cart.length?cart.every(v=>v.checked):false
    this.setCart(cart)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.onshow();
  },
  handItemChange(e){
    const goods_id=e.currentTarget.dataset.id
    let {cart}=this.data
    let index=cart.findIndex(v=>v.goods_id===gonds_id);
    cart[index].checked=!cart[index].checked;
    this.setCart(cart)
  },
  //设置购物车状态
  setCart(){
    let allChecked=true;

    let totalPrice=0;
    let totalNum=0;
    cart.forEach(v => {
      if(v.checked){
        totalPrice+=v.num*v.price
        totalNum+=v.num

      }else{
        allChecked=false
      }
    });
    allChecked = cart.length!=0?allChecked:false
    this.setData({
      cart,
      allChecked,
      totalPrice,
      totalNum
    })
    wx.setStorageSync("cart", cart);
  }
})