// pages/category/index.js
import {request} from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
        goods_id:7
      },
      {
        name:"营养早餐",
        goods_id:7
      },
      {
        name:"营养早餐",
        goods_id:7
      },
      {
        name:"营养早餐",
        goods_id:7
      },
      {
        name:"营养早餐",
        goods_id:7
      },
      {
        name:"营养早餐",
        goods_id:7
      },
      {
        name:"营养早餐",
        goods_id:7
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
            oldprice:"26.40"
          },{
            image_src:"../../image/1.PNG",
            name:"鲜活多宝鱼",
            unit:"450g以上",
            price:"25.80",
            oldprice:"26.40"
          },{
            image_src:"../../image/1.PNG",
            name:"鲜活多宝鱼",
            unit:"450g以上",
            price:"25.80",
            oldprice:"26.40"
          },{
            image_src:"../../image/1.PNG",
            name:"鲜活多宝鱼",
            unit:"450g以上",
            price:"25.80",
            oldprice:"26.40"
          },{
            image_src:"../../image/1.PNG",
            name:"鲜活多宝鱼",
            unit:"450g以上",
            price:"25.80",
            oldprice:"26.40"
          },{
            image_src:"../../image/1.PNG",
            name:"鲜活多宝鱼",
            unit:"450g以上",
            price:"25.80",
            oldprice:"26.40"
          },{
            image_src:"../../image/1.PNG",
            name:"鲜活多宝鱼",
            unit:"450g以上",
            price:"25.80",
            oldprice:"26.40"
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
    //商品数据
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})