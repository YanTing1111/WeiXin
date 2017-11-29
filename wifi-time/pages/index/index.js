//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    second:3
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  onLoad: function (options) {
   var that = this;
   var second = 3 ;
   setTimeout(() => {
     second -= second;
   }, 1000);
  },
  getUserInfo: function(e) {
    
  }
})
