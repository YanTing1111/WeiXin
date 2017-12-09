// pages/check/check.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status:false,
    toastText:''
  },
  nextBton:function(event){
    wx.navigateTo({
      url: '../check/oneQuestion'
    })
    wx.showToast({
      title:'设置成功！',
      icon:'success',
      duration:200
    })
  },
  toastHidden:function(event){
    this.setData({status:!this.data.status})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      status:true,
      toastText:'设置成功!'
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