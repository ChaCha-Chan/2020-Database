
 Page({
  data: {
    stars:[
      {
        flag:1,
        bgImg: "http://wximg.youtasc.com/star.png",
        bgfImg:"http://wximg.youtasc.com/f_star.png"
      },
      {
        flag: 1,
        bgImg: "http://wximg.youtasc.com/star.png",
        bgfImg: "http://wximg.youtasc.com/f_star.png"
      },
      {
        flag: 1,
        bgImg: "http://wximg.youtasc.com/star.png",
        bgfImg: "http://wximg.youtasc.com/f_star.png"
      },
      {
        flag: 1,
        bgImg: "http://wximg.youtasc.com/star.png",
        bgfImg: "http://wximg.youtasc.com/f_star.png"
      },
      {
        flag: 1,
        bgImg: "http://wximg.youtasc.com/star.png",
        bgfImg: "http://wximg.youtasc.com/f_star.png"
      }
    ]
  },
  score:function(e){
    var that=this;
    for(var i=0;i<that.data.stars.length;i++){
      var allItem = 'stars['+i+'].flag';
      that.setData({
        [allItem]: 1
      })
    }
    var index=e.currentTarget.dataset.index;
    for(var i=0;i<=index;i++){
      var item = 'stars['+i+'].flag';
      that.setData({
        [item]:2
      })
    }
  },

 })