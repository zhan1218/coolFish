// pages/03lesson/03lesson.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lessonData:[
      {
        path:'/img/personIcon (2).png',
        title:'创意DIY班',
        subTitle:'适宜2-3岁宝宝',
        isFull:false,
        // 添加一个name属性--去wxml自定义一个name-在同一个标签里面添加点击事件，跳转过去就会带上对应的name值
        name:'创意DIY'
      },
      {
        path:'/img/personIcon (1).png',
        title:'创意美术班',
        subTitle:'适宜3-6岁儿童',
        isFull:false,
        name:'创意美术班'
      },
      {
        path:'/img/personIcon (3).png',
        title:'素描班',
        subTitle:'适宜7岁以上儿童',
        isFull:true,
        name:'创意素描班'
      },
      {
        path:'/img/personIcon (4).png',
        title:'色彩班',
        subTitle:'适宜8岁以上儿童',
        isFull:false,
        name:'创意色彩斑'
      },
      {
        path:'/img/personIcon (5).png',
        title:'速写班',
        subTitle:'适宜7岁以上儿童',
        isFull:false,
        name:'创意速写'
      }
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
  
  },
  // 点击课表去详情页(带上数据)
  lessonInfo:function(event){
    // console.log(event);
    var lessonName=event.currentTarget.dataset.name;
    wx.navigateTo({
      url: "/pages/03lesson/lessonInfo/lessonInfo?lessonName="+lessonName
    });
  }
})