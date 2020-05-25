// pages/goods_list/index.js
import {request} from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        value:"综合",
        isActive:true
      },{
        id:1,
        value:"销量",
        isActive:false
      },{
        id:2,
        value:"价格",
        isActive:false
      }
    ],
    goodsList:[
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
  //接口参数
  QueryParams:{
    query:"",
    cid:"",
    pagenum:1,
    pagesize:10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.QueryParams.cid=options.cid;
      this.getDoodsList();
  },
//获取商品列表
  async getDoodsList(){
    const res = await request({
      url:"",
      data:this.QueryParams
    })
    this.setData({
      goodsList:res.goods
    })

    //关闭下拉刷新的窗口
    wx.stopPullDownRefresh();
  },
  //子组件传来的
  handleTabsItemChange(e){
    //获取被点击的索引
    const {index}=e.detail;
    //修改原数组
    let {tabs}=this.data;
    tabs.forEach((v,i) => {
      i==index?v.isActive=true:v.isActive=false
    });
    //赋值到data中
    this.setData({
      tabs
    })
  },
  //触底触发
  onReachBottom(){
    
  },
  //下拉刷新事件
  onPullDownRefresh(){
    //1.重置数组
    this.setData({
      goodsList:[]
    })
    //2.重置页码
    this.QueryParams.pagenum=1;
    //3.重新发送请求
    this.getDoodsList();
  }
})