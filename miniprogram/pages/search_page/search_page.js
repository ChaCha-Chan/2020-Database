// pages/search_page/search_page.js
const db = wx.cloud.database()
const courseCollection = db.collection('course')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    courseCollection.get().then(res => {
      this.setData({
        course: res.data
      })
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
    courseCollection.get().then(res => {
      this.setData({
        course: res.data
      },res=>{
        wx.stopPullDownRefresh()
      })
    })
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

  },
  order1:function(){
    courseCollection.orderBy('course_avg_easy_score', 'desc').get().then(res => {
      this.setData({
        course: res.data
      })
    })
  },
  order2: function () {
    courseCollection.orderBy('course_avg_interesting_score', 'desc').get().then(res => {
      this.setData({
        course: res.data
      })
    })
  },
  filter1: function () {
    courseCollection.where({
      course_type:'专必'
    }).get().then(res => {
      this.setData({
        course: res.data
      })
    })
  },
  filter2: function () {
    courseCollection.where({
      course_type: '专选'
    }).get().then(res => {
      this.setData({
        course: res.data
      })
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
    console.log(this.data.inputValue)
    this.search()
  },
  search:function(){
    console.log("查询的内容", this.data.inputValue)
    courseCollection.where({
      course_name: db.RegExp({
        regexp: '.*' + this.data.inputValue,
        options: 'i',
      })
    }).get({
      success: res => {
        console.log('succ',res)
        this.setData({
          course: res.data
        })
      },
      fail: err => {
        console.log('err',err)
      }
    })
  }
})