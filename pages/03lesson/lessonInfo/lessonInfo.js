// pages/03lesson/lessonInfo/lessonInfo.js
var sliderWidth = 61; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
      name: "",
      teacher: "酷老师",
      studyNumber: 998,
      // 随机播放一个视频
      currentUrl: "",
      movieList: [
        {
          url:
            "https://crazynote.v.netease.com/2018/0607/fd1f2b964bc1ad28a926071a28af2b03.mp4",
          subTitle: "基本介绍",
          time: "02:59"
        },
        {
          url: "https://n.v.netease.com/2018/0130_qtjs/qtjs_new_hd.mp4",
          subTitle: "注意事项",
          time: "02:55"
        },
        {
          url:
            "https://crazynote.v.netease.com/2018/0605/73ddc056ce115c27885a1adb52ad0643qt.mp4",
          subTitle: "新手入门",
          time: "1:47"
        },
        {
          url:
            "https://nie.v.netease.com/nie/2017/0830/64a1a3ae100f830b48c134d702f0d3a0qt.mp4",
          subTitle: "菜鸟起飞",
          time: "0:59"
        },
        {
          url:
            "https://flv.bn.netease.com/videolib3/1511/07/CoPrF6333/HD/CoPrF6333-mobile.mp4",
          subTitle: "我们不一样",
          time: "04:24"
        },
        {
          url:
            "https://nie.v.netease.com/nie/2017/1109/5ca2bb0e5979eec17d6ef183cc9256ddqt.mp4",
          subTitle: "从未自卑",
          time: "01:52"
        }
      ],
      // es6的多行文本(`)
      desc: `这里有各种奇思妙想，
      有疯狂的简笔画，
      会教你用叉子打蝴蝶结，
      各种新奇玩意，
      只要你在生活中发现任何美好的事物，
      我们都能动手制作出来。
      陶艺体验、美味厨艺、创意手工、艺术涂鸦
      等多种不同艺术形式，给孩子留下美好的童年记忆。
      `,
      // 评论信息
      commentList: [
        {
          name: "刘妈妈",
          icon: "/img/motherL.gif",
          info: "宝宝很喜欢呢"
        },
        {
          name: "彭妈妈",
          icon: "/img/motherP.png",
          info: "宝宝吵着还要看"
        },
        {
          name: "王妈妈",
          icon: "/img/motherW.gif",
          info: "不给看还哭"
        },
        {
          name: "王妈妈",
          icon: "/img/motherW.gif",
          info: "不给看还哭"
        },
        {
          name: "王妈妈",
          icon: "/img/motherW.gif",
          info: "不给看还哭"
        },
        {
          name: "王妈妈",
          icon: "/img/motherW.gif",
          info: "不给看还哭"
        },
        {
          name: "王妈妈",
          icon: "/img/motherW.gif",
          info: "不给看还哭"
        },
        {
          name: "张妈妈",
          icon: "/img/motherZ.png",
          info: "我谢谢你啊"
        }
      ],
      // 导航信息
      tabs: ["目录", "详情", "评价"],
      activeIndex: 0,
      sliderOffset: 0,
      sliderLeft: 0
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 跳到详情页会带上对应的name数据--然后渲染到页面上
    // console.log(options);

    // 随机获取一个视频并播放，从现有视频找到一个绑定给视频地址数据
    /*Math.random(0-1的小数）->数组的长度（0-长度1） */
    var randomIndex=Math.floor(Math.random()*this.data.movieList.length);
    // console.log(randomIndex);
    // 获取随机视频的地址，绑定数据
    var currentUrl=this.data.movieList[randomIndex].url;
    console.log(currentUrl);
    this.setData({
      currentUrl:currentUrl
    });

    //设置顶部标签
    /*API-界面-设置导航条 --动态设置当前页面的标题 */
    wx.setNavigationBarTitle({
      title: options.lessonName+"班视频演示"
    });
    this.setData({
      name:options.lessonName
    });
    
     // 底部的初始化代码
    var that = this;
    wx.getSystemInfo({
        success: function(res) {
            that.setData({
                sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
            });
        }
    });
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
    // console.log('show');
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    //wx.createVideoContext(videoId, this)，
    //获取视频id,需要传入两参数 id 和 this
    var videoContext=wx.createVideoContext('video',this);
    //页面隐藏，暂停pause视频  api-媒体-视频组件控制
    // 编辑器的坑，在手机上会有暂停效果
    videoContext.pause();
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

  //点击底部nav导航栏
  tabClick: function (e) {
    this.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: e.currentTarget.id
    });
  },

  //切换播放视频 02
  changeVideo:function(event){
    // console.log(event);
    //绑定给currentUrl即可
    this.setData({
      // 只有在html5里面设置了自定义属性data-才能在浏览器里拿到dataset
      currentUrl:event.currentTarget.dataset.url
    });
  },

  //点击关注，跳转去购买页面
  buyLesson:function(){
    wx.navigateTo({
      url: '/pages/03lesson/buyLesson/buyLesson'
    });   
  }

})