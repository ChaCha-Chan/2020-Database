// pages/more/feedback.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    // 评价图片
    evaluationImgUrl: "https://s1.ax1x.com/2018/08/05/PDM8Bj.png",
    starCheckedImgUrl: "https://s1.ax1x.com/2018/08/05/PDQ0it.png",
    starUnCheckedImgUrl: "https://s1.ax1x.com/2018/08/05/PDQdII.png",
    // 建议内容
    opinion: "",
    courseId: "",
    easyScore:"",
    insterestingScore:"",

    starMap: [
      '1分',
      '2分',
      '3分',
      '4分',
      '5分',
    ],
    
    
    evaluations: [
      {
        id: 0,
        name: "难易度",
        image: "https://s1.ax1x.com/2018/08/05/PDMaCV.png",
        star: 0,
        note: ""
      },
      {
        id: 1,
        name: "有趣度",
        image: "https://s1.ax1x.com/2018/08/05/PDMd3T.png",
        star: 0,
        note: ""
      }
    ]
  },
 
  /**
   * 评分
   */
  chooseStar: function (e) {
    const index = e.currentTarget.dataset.index;
    const star = e.target.dataset.star;
    let evaluations = this.data.evaluations;
    let evaluation = evaluations[index];
    // console.log(evaluation)
    evaluation.star = star;
    evaluation.note = this.data.starMap[star-1];
    this.setData({
      evaluations: evaluations
    })
  },

  submit:function(){
    var _this=this;
    var score1=this.data.evaluations[0].star;
    var score2=this.data.evaluations[1].star;

    _this.setData({
      easyScore:score1
    })
    _this.setData({
      insterestingScore:score2
    })
    console.log("课程ID" ,_this.data.courseId);
    console.log("难易度" ,_this.data.easyScore);
    console.log("有趣度" ,_this.data.insterestingScore);
    wx.navigateTo({
      url: "../submit_page/submit_page?id="+this.data.courseId+"&easyScore="+score1+
      "&interestingScore="+score2
    })
  },

  onLoad:function(e){
    var _this=this;
    var _courseid=this.data.courseId;
    _this.setData({
      courseId:e.id
    })
  }
})