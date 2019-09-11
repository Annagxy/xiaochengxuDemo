var app = getApp()

Page({
  data: {
    userInfo: {},
    imgUrls: [
      'https://www.enterdesk.com/static/images/20190813ad.png',
      'https://www.enterdesk.com/static/images/20190813ad.png',
      'https://www.enterdesk.com/static/images/20190813ad.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500
  },
  onLoad: function () {
    console.log('onload test')
  }
})