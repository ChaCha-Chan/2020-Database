const cloud=require('wx-server-sdk')
cloud.init({
  env: 'lessonselection-3gkkqii31b501470',
  traceUser:true,
})
const db = wx.cloud.database({});
const _ =db.command
var $ = cloud.database().command.aggregate   //定义聚合操作符

// 云函数入口函数
exports.main = async (event, context) => {
  //直接返回调取结果。
   return cloud.database().collection("favorite").get({
    success(res){
      return res
    },
    fail(err){
      return err
    }
  })
}

