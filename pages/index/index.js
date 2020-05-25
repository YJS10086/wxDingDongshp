//Page Object
import { request } from "../../request/index.js";

Page({
  data: {
    //轮播图数组
    swiperList:[
      {
        image_src:"../../image/三月路子桃花.jpg",
        goods_id:"1"
      },{
        image_src:"../../image/三月路子桃花.jpg",
        goods_id:"2"
      }
    ],
    // 导航数组
    catesList:[
      {
        goods_id:1,
        name:"安心蔬菜",
        image_src:"../../image/1.PNG",
        open_type:"swichTab",
        navigator_url:"/pages/category/index"
      },
      {
        goods_id:2,
        name:"豆制品",
        image_src:"../../image/1.PNG",
        open_type:"swichTab",
        navigator_url:"/pages/category/index"
      },
      {
        goods_id:3,
        name:"新鲜水果",
        image_src:"../../image/1.PNG",
        open_type:"swichTab",
        navigator_url:"/pages/category/index"
      },
      {
        goods_id:4,
        name:"肉禽蛋",
        image_src:"../../image/1.PNG",
        open_type:"swichTab",
        navigator_url:"/pages/category/index"
      },
      {
        goods_id:5,
        name:"海鲜水产",
        image_src:"../../image/1.PNG",
        open_type:"swichTab",
        navigator_url:"/pages/category/index"
      },
      {
        goods_id:6,
        name:"陆品烘烤",
        image_src:"../../image/1.PNG",
        open_type:"swichTab",
        navigator_url:"/pages/category/index"
      },
      {
        goods_id:7,
        name:"营养早餐",
        image_src:"../../image/1.PNG",
        open_type:"swichTab",
        navigator_url:"/pages/category/index"
      },
      {
        goods_id:8,
        name:"营养早餐",
        image_src:"../../image/1.PNG",
        open_type:"swichTab",
        navigator_url:"/pages/category/index"
      },
      {
        goods_id:9,
        name:"营养早餐",
        image_src:"../../image/1.PNG",
        open_type:"swichTab",
        navigator_url:"/pages/category/index"
      },
      {
        goods_id:10,
        name:"营养早餐",
        image_src:"../../image/1.PNG",
        open_type:"swichTab",
        navigator_url:"/pages/category/index"
      }
    ],
    //楼层数据
    GoodsList:[
      {
        image_src:"../../image/1.PNG",
        name:"鲜活多宝鱼",
        unit:"450g以上",
        price:"25.80",
        oldprice:"26.40",
        goods_id:1
      },{
        image_src:"../../image/1.PNG",
        name:"鲜活多宝鱼",
        unit:"450g以上",
        price:"25.80",
        oldprice:"26.40",
        goods_id:2
      },{
        image_src:"../../image/1.PNG",
        name:"鲜活多宝鱼",
        unit:"450g以上",
        price:"25.80",
        oldprice:"26.40",
        goods_id:3
      },{
        image_src:"../../image/1.PNG",
        name:"鲜活多宝鱼",
        unit:"450g以上",
        price:"25.80",
        oldprice:"26.40",
        goods_id:4
      },{
        image_src:"../../image/1.PNG",
        name:"鲜活多宝鱼",
        unit:"450g以上",
        price:"25.80",
        oldprice:"26.40",
        goods_id:5
      },{
        image_src:"../../image/1.PNG",
        name:"鲜活多宝鱼",
        unit:"450g以上",
        price:"25.80",
        oldprice:"26.40",
        goods_id:6
      },{
        image_src:"../../image/1.PNG",
        name:"鲜活多宝鱼",
        unit:"450g以上",
        price:"25.80",
        oldprice:"26.40",
        goods_id:7
      }
    ]
  },
  //options(Object)
  //页面开始就会触发
  onLoad: function(options){
    //1.异步请求  获取轮播图数据
    //promise
    // var reqTask = wx.request({
    //   url: '',
    //   success: (result)=>{
    //     this.setData({
    //       swiperList:result.data.message
    //     })
    //   },
    //   fail: ()=>{},//失败触发
    //   complete: ()=>{}
    // });
    //封装后
    this.getSwiperList();
    this.getCateList();
    this.getFloorList();
  },
  getSwiperList(){
    request({url:""})
    .then(result=>{
           this.setData({
          swiperList:result
        })
    })
  },
  getCateList(){
    request({url:""})
    .then(result=>{
           this.setData({
            catesList:result
        })
    })
  },
  getFloorList(){
    request({url:""})
    .then(result=>{
           this.setData({
            floorList:result
        })
    })
  },
  onReady: function(){
    
  },
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  }
});