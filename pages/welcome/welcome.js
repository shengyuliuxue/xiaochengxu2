// pages/welcome.js
Page({

  /**
   * Page initial data
   */
  data: {
    demo:[{
      image: '/pages/taco.jpg',
      title: '显瘦中长款系带风衣',
      describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理',
      count: '888',
      delCount: '666'
    },{
      image: '/pages/taco.jpg',
      title: '显瘦中长款系带风衣',
      describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。',
      count: '777',
      delCount: '666'
    },{
      image: '/pages/taco.jpg',
      title: '显瘦中长款系带风衣',
      describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。',
      count: '666',
      delCount: '555'
    },
    {
      image: '/pages/taco.jpg',
      title: '显瘦中长款系带风衣',
      describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。',
      count: '444',
      delCount: '400'
    },{
      image: '/pages/taco.jpg',
      title: '显瘦中长款系带风衣',
      describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。',
      count: '333',
      delCount: '300'
    },{
      image: '/pages/taco.jpg',
      title: '显瘦中长款系带风衣',
      describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。',
      count: '222',
      delCount: '200'
    }]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.lin.renderWaterFlow(this.data.demo, false, ()=>{
      console.log('渲染成功')
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})