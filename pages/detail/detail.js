    // pages/detail/detail.js
let datas = require("../../datas/list-data.js");
console.log(datas);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj:{},
    index: null,
    isCollection:false,
    isMusicPlay: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    // 获取参数值
    let index = options.index;
    // 更新data中detailObj的状态值
    this.setData({
      detailObj: datas.list_data[index],
      index
    })

    // 根据本地缓存的数据判断用户是否收藏当前文章
    let detailStorage = wx.getStorageSync("isCollection");
    console.log(detailStorage);
    // 初始化
    if(!detailStorage){
      wx.setStorage({
        key: 'isCollection',
        data: {},
      })
    }

    if(detailStorage[index]){
      this.setData({
        isCollection:true
      });
    }

    // 监听音乐播放
    wx.onBackgroundAudioPlay({
      
    });
    // 监听音乐暂停
    wx.onBackgroundAudioPause()
  },

  handleCollection(){
    let isCollection = !this.data.isCollection;
    // 更新状态
    this.setData({
      isCollection
    });
    // 提示用户
    let title = isCollection?'收藏成功':'取消收藏';
    wx.showToast({
      title: title,
      icon: 'success',  
    });

    // 先读取数据
    let {index} = this.data;

    wx.getStorage({
      key: 'isCollection',
      success: function(datas) {
        console.log(datas, typeof datas);
        console.log(datas.data, typeof datas.data);
        let obj = datas.data;
        obj[index] = isCollection;
        console.log(obj);

        // 缓存数据到本地，{1:false,2:true}
        wx.setStorage({
          key: 'isCollection',
          data: obj,
          success: () => {
            console.log("数据缓存成功")
          }
        })
      },
    })
  },

  handleMusicPlay(){
    // 处理音乐播放
    let isMusicPlay = !this.data.isMusicPlay;
    this.setData({
      isMusicPlay: isMusicPlay
    })
    console.log(isMusicPlay);

    // 控制音乐
    if(isMusicPlay){
      // 播放音乐
      console.log(this.data);
      let { dataUrl, title} = this.data.detailObj.music;
      wx.playBackgroundAudio({
        dataUrl,
        title
      })
    } else {
      // 暂停音乐
      wx.pauseBackgroundAudio()
    }
  },

  // 点击分享
  handleShare(){
    wx.showActionSheet({
      itemList: ['分享到朋友圈','分享到微博','分享到QQ空间'],
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