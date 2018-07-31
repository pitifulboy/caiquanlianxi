//index.js
//获取应用实例
const app = getApp()

let timer;
let numai = 0;

Page({
  data: {
    btnstate: false,
    totalnum: 0,
    winnum: 0,
    msg: "谁赢了？",
    aiimg: '',
    humanimg: '/pages/images/suiji.png',
    srcs: [
      '/pages/images/shitou.png',
      '/pages/images/jiandao.png',
      '/pages/images/bu.png'
    ]

  },
  //事件处理函数
  onLoad: function() {
    this.ai();
  },

  ai() {
    timer = setInterval(this.change, 100);
  },

  change() {
    numai = parseInt(Math.floor(Math.random() * 3));
    this.setData({
      aiimg: this.data.srcs[numai]
    })
  },

  changeforchoose(e) {
    // 判断是否已经选择，如果选择，无法重新选择。
    if (this.data.btnstate) {
      return;
    }

    this.setData({
      humanimg: this.data.srcs[e.currentTarget.id]
    });
    clearInterval(timer);

    let user = this.data.humanimg;
    let ai = this.data.aiimg;
    let total = this.data.totalnum;
    let win = this.data.winnum;
    let str = "你输了";
    total++;

    if (user == '/pages/images/shitou.png' && ai == '/pages/images/jiandao.png') {
      win++;
      str = "你赢了！";
    } else if (user == '/pages/images/jiandao.png' && ai == '/pages/images/bu.png') {
      win++;
      str = "你赢了！";
    } else if (user == '/pages/images/bu.png' && ai == '/pages/images/shitou.png') {
      win++;
      str = "你赢了！";
    } else if (user == ai) {
      str = "平局";
      total--;
    }

    this.setData({
      winnum: win,
      totalnum: total,
      msg: str,
      btnstate: true,
    })
  },

  restart() {
    clearInterval(timer);
    this.ai();
    this.setData({
      msg: "谁赢了？",
      humanimg: '/pages/images/suiji.png',
      btnstate: false,
    })
  }

})