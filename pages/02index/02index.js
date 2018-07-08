// pages/02index/02index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/img/banner-01@2x.png',
      '/img/banner-02@2x.png',
      '/img/banner-03@2x.png'
      
    ],
      indicatorDots: true,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      // 前后边距
      previousMargin:'30rpx',
      nextMargin:'30rpx',
      circular:true,

      // 热门课程数据
    hotLesson: [
      {
        color: "#4399f9",
        title: "创意DIY班",
        subTitle: "适合2-3岁的宝宝"
      },
      {
        color: "#8c43f9",
        title: "速写班",
        subTitle: "适合6岁以上的儿童/青少年"
      },
      {
        color: "#ff6700",
        title: "国画班",
        subTitle: "适合6岁以上的儿童/青少年"
      },
      {
        color: "#ff00ff",
        title: "油画班",
        subTitle: "适合16岁以上的青少年"
      },
      {
        color: "#42bb54",
        title: "切图仔",
        subTitle: "适合26岁以上的共青团员"
      }
    ],


    recommedMovies:[
      {
        path:'/img/recommed (1).png',
        title:'非常可爱的布偶插画流程',
        seeCount:'5685人观看'
      },
      {
        path:'/img/recommed (2).png',
        title:'让孩子爱上绘画的秘密',
        seeCount:'5685人观看'
      },
      {
        path:'/img/recommed (3).png',
        title:'非常可爱的布偶插画流程',
        seeCount:'5685人观看'
      },
      {
        path:'/img/recommed (4).png',
        title:'非常可爱的布偶插画流程',
        seeCount:'5685人观看'
      },
    ]

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