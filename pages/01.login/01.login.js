// pages/01.login/01.login.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 组件-表单组件-picker-省市数据
    region: ['请选择', '目前的', '居住地'],
    customItem: '全部'
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

  //绑定change事件--选中居住地
  bindRegionChange:function(event){
    // 可打印出数据
    // console.log(event);
    this.setData({
      region:event.detail.value
    })
  },

  // 页面跳转逻辑
  //表单数据提交事件
  doRegister:function(event){
    console.log(event);
    //弹出loading框,提示
    wx.showLoading({
      title: "正在注册中..",
      mask: true,
    });
    //ajax提交数据
    //success

    // 设置一个定时器,1秒后关闭loading框
    setTimeout(function(){
      wx.hideLoading();
      //提示用户成功
      wx.showToast({
        title: "注册成功,welcome",
        icon: 'success',
        duration: 1500,
        mask: true,
        success:function(){
        
          //提示后,跳转去首页
          console.log('成功啦,去首页');
          // 底部非页面需要使用switchTab进行跳转--到tabBar页面

          //保存用户数据（app.js里面的全局数据）
          app.globalData.userInfo = event.detail.value;
          
          wx.switchTab({
            url: '/pages/02index/02index'
          });
        }
      });
    },1000)
  }
})