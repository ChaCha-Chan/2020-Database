// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: "lessonselection-3gkkqii31b501470",
})

const db = cloud.database()
// 云函数入口函数
exports.main = async(event, context) => {
  var id = event._id
 
  try {
    return await db.collection('score').doc(id).remove()
 
  } catch (e) {
    console.log(e)
  }
}