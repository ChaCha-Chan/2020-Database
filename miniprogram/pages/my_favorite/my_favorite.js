
Page({
  data:{
      favoriteList: []
   },
 /**
  * 生命周期函数--监听页面加载
  */
 onLoad: function (options) {
  var _this = this;
  //1、引用数据库   
  const db = wx.cloud.database({
    //这个是环境ID不是环境名称     
    env: 'lessonselection-3gkkqii31b501470'
  })
  wx.cloud.callFunction({
    name:'getfavorite',
    success(res){
     console.log("yes",res.result);
     console.log(_this);
     _this.setData({
       favoriteList:res.result.list
     })
     },
   })
   console.log("no",_this.data.favoriteList)
}, 
onDetail:function(e){
  console.log("页面信息",e)
  var courseId=e.currentTarget.dataset.bzid;
  console.log("this id is",courseId)
  wx.navigateTo({
    url:"../score_page/score_page?id=" + courseId
  });
},
})