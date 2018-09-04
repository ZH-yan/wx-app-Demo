Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo:{},
    isShow:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log("onLoad 页面加载...");
    
    this.getUserInfo();
  },

  getUserInfo(){
    // 判断用户是否授权
    wx.getSetting({
      success: (data) => {
        console.log(data);
        if (data.authSetting['scope.userInfo']) {
          this.setData({
            isShow: false
          })

        } else {
          
        }
      }
    })

    // 获取用户的登录信息
    wx.getUserInfo({
      success: (res) => {
        console.log(res.userInfo);
        this.setData({
          userInfo: res.userInfo
        })
      }
    })

  },
  

  bindGetUserInfo: function (e) {
    console.log(e.detail);
    if(e.detail.rawData){
      // 用户点的是允许，重新加载
      this.getUserInfo();
    }
  },

  clickHandle(){
    wx.switchTab({
      url: '/pages/list/list',
    })
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