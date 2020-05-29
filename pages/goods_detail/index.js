// pages/goos_detail/index.js
import {request} from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObj:{
        name:"鲜活多宝鱼",
        unit:"450g以上",
        price:"25.80",
        oldprice:"26.40",
        goods_id:1,
        number:"400g",
        tip:"冷藏",
        days:"3天",
        image:[
          {
            image_id:1,
            image_src:"../../image/1.PNG",
          },{
            image_id:1,
            image_src:"../../image/1.PNG",
          },{
            image_id:1,
            image_src:"../../image/1.PNG",
        }
      ]
    },
    //推荐做法列表
    Dolist:[
      {
        name:"鲜活多宝鱼",
        image_src:"../../image/1.PNG",
      },{
        name:"鲜活多宝鱼",
        image_src:"../../image/1.PNG",
      },{
        name:"鲜活多宝鱼",
        image_src:"../../image/1.PNG",
      },{
        name:"鲜活多宝鱼",
        image_src:"../../image/1.PNG",
      },{
        name:"鲜活多宝鱼",
        image_src:"../../image/1.PNG",
      },{
        name:"鲜活多宝鱼",
        image_src:"../../image/1.PNG",
      },{
        name:"鲜活多宝鱼",
        image_src:"../../image/1.PNG",
      },{
        name:"鲜活多宝鱼",
        image_src:"../../image/1.PNG",
      },{
        name:"鲜活多宝鱼",
        image_src:"../../image/1.PNG",
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {goods_id}=options
    this.getGoodsDetail(goods_id)
  },
  //获取商品详情数据
  async getGoodsDetail(goods_id){
    const res =await request({
      url:"",
      data:{goods_id}
    })
    this.setData({
      goodsObj:res
    })
  },
  //点击加入购物车
  handleCartAdd(){
    // wx.clearStorageSync("cart",cart);
    let cart= wx.getStorageSync('cart')||[];
    let index =cart.findIndex(v=>v.goods_id===this.data.goodsObj.goods_id);
    if(index===-1){
      this.data.goodsObj.num=1;
      this.data.goodsObj.checked=true;
      cart.push(this.data.goodsObj)
    }else{
      cart[index].num++;
    }
    wx.setStorageSync("cart",cart);
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      //防止用户疯狂手抖
      mask: true
    });
  }
})