// app.js
App({
  //小程序启动便执行
  onLaunch() {
    wx.cloud.init({
      env: 'cloud1-1g4o6q2o3e4864c5'//云开发环境id
    })
  },
  //全局变量
  globalData:{
    userName:'',
    dataBaseImgUrl:'cloud://cloud1-1g4o6q2o3e4864c5.636c-cloud1-1g4o6q2o3e4864c5-1349760642/images',//云数据库图片地址头
    ifLogin:false//是否已登录
  }
})
