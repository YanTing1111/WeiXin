// pages/MyMovie/MyMovie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // movies:[]
    ava:''
  },
  getmovie:function(){
    
  },
  nextBton:function(){
    wx.navigateTo({
      url:'../MyMovie/MyMovieOne'
    })
    wx.showToast({
      title:'设置成功！',
      icon:'success',
      duration:200
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this ;
    wx.request({
      url:'https://www.easy-mock.com/mock/5a2bee65e14b1971b65c7cb1/MoviesInfo/getMoviesInfo',
      method:'GET',
      success:function(res){
        console.log(res.data.data.movies);
        that.setData({
          ava:res.data.data.movies.avatar
        })
      }
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