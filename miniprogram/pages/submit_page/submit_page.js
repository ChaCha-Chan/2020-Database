// pages/submit_page/submit_page.js

const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
     deleteId:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     console.log("上一页的数据",options)
     var _this=this;
     var id="";
     var courseId=options.id;
     var easyScore=options.easyScore;
     var interestingScore=options.interestingScore;
     const db = wx.cloud.database({
      //这个是环境ID不是环境名称     
      env: 'lessonselection-3gkkqii31b501470'
    })
    
    // words:数据记录的名称
    // chapter:words中一条记录中的一个字段名
    db.collection('score').where({
      course_id:courseId// 查询条件：chapter=1
    }).get().then(
      res=>{
       
        wx.cloud.callFunction({
          name: "deleterepeated",
          data: {
            _id: res.data[0]._id,
          },
          success: res => {
            console.log('[云函数] [deleteBook] 删除成功！！ ')
            wx.hideLoading();
          }
        })
      }
    //之后编写 需要利用返回数据的代码 看个人情况吧
    )

    db.collection('score').add({
      data:{
        course_id:courseId,
        easy_score:easyScore,
        interesting_score:interestingScore,
        s_time:new Date(),
      },
      success:res=>{
        console.log("数据添加成功")
      }
    })
    console.log(id)
   



    
    

     
  } ,
    

})