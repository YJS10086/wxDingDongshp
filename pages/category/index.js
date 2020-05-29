// pages/category/index.js
import {request} from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:false,
    
    //被点击de菜单
    currentIndex:0,
    // 左侧数据
    category_left:[
      {
        name:"安心蔬菜",
        goods_id:1,
      },
      {
        name:"豆制品",
        goods_id:2
      },
      {
        name:"新鲜水果",
        goods_id:3
      },
      {
        name:"肉禽蛋",
        goods_id:4
      },
      {
        name:"海鲜水产",
        goods_id:5
      },
      {
        name:"陆品烘烤",
        goods_id:6
      },
      {
        name:"营养早餐",
        goods_id:7
      },
      {
        name:"营养早餐",
        goods_id:8
      },
      {
        name:"营养早餐",
        goods_id:9
      },
      {
        name:"营养早餐",
        goods_id:10
      }
    ],
    // 右侧头部数据
    concent_top:[
      {
        name:"全部",
        id:0,
        GoodsList:[
          {
            image_src:"../../image/1.PNG",
            name:"鲜活多宝鱼",
            unit:"450g以上",
            price:"25.80",
            oldprice:"26.40",
            cat_id:1
          },{
            image_src:"../../image/1.PNG",
            name:"鲜活多宝鱼",
            unit:"450g以上",
            price:"25.80",
            oldprice:"26.40",
            cat_id:2
          },{
            image_src:"../../image/1.PNG",
            name:"鲜活多宝鱼",
            unit:"450g以上",
            price:"25.80",
            oldprice:"26.40",
            cat_id:3
          },{
            image_src:"../../image/1.PNG",
            name:"鲜活多宝鱼",
            unit:"450g以上",
            price:"25.80",
            oldprice:"26.40",
            cat_id:4
          },{
            image_src:"../../image/1.PNG",
            name:"鲜活多宝鱼",
            unit:"450g以上",
            price:"25.80",
            oldprice:"26.40",
            cat_id:5
          },{
            image_src:"../../image/1.PNG",
            name:"鲜活多宝鱼",
            unit:"450g以上",
            price:"25.80",
            oldprice:"26.40",
            cat_id:6
          },{
            image_src:"../../image/1.PNG",
            name:"鲜活多宝鱼",
            unit:"450g以上",
            price:"25.80",
            oldprice:"26.40",
            cat_id:7
          }
        ]
      },{
        name:"推荐",
        id:1
      },{
        name:"新品",
        id:2
      },{
        name:"评价好菜",
        id:3
      },{
        name:"崇明蔬菜",
        id:4
      },{
        name:"叶菜类",
        id:5
      },{
        name:"挂果类",
        id:6
      },{
        name:"净菜",
        id:7
      },{
        name:"球精类",
        id:8
      },
    ],
    //右侧内容靠顶部的距离
    scrolltop:0
  },
  Cates:[],
  onLoad:function(e){
    //使用缓存技术
    const Cates=wx.getStorageSync("cates");
    if(!Cates){
      //不存在，请求数据
      this.getCates();
    }else{
      //有旧的数据 10s
      if(Date.now()-Cates.times>1000*10){
        this.getCates();
      }else{
        this.Cates=Cates.data
        let category_left=this.Cates.map(v=>v.cat_name);
        let concent_top =this.Cates[0].children;
        this.setData({
          category_left,
          concent_top
        })
      }
    }
  },
  async getCates(){
    // request({
    //   url:""
    // })
    // .then(res=>{
    //   this.Cates=res.data.message;
    //   wx.setStorageSync("cates", {time:Data.now(),data:this.Cates});
    //   //获取数据
    //   let category_left=this.Cates.map(v=>v.cat_name);
    //   let concent_top =this.Cates[0].children;
    //   this.setData({
    //     category_left,
    //     concent_top
    //   })
    // })


    //使用es7的async await异步
    const res =await request({url:""});
    this.Cates=res;
      wx.setStorageSync("cates", {time:Data.now(),data:this.Cates});
      //获取数据
      let category_left=this.Cates.map(v=>v.cat_name);
      let concent_top =this.Cates[0].children;
      this.setData({
        category_left,
        concent_top
      })
  },
  //左侧菜单点击事件
  bandleItemTap(e){
    let A ={}
    A =e.currentTarget.dataset.index;
      // let concent_top =this.Cates[A].children;
      this.setData({
        currentIndex:A,
        // concent_top,
        //设置右侧距离
        scrolltop:0
      })
  }
})