window.config = {
  list: {},
  version: '1.7.6',
  host: "https://xn--wgv9cz54cexz.com", // 后端接口地址
  title: "跨越长城", // 网站标题
  logo: '/static/img/logo6.svg', // 网站logo
  logo2: '', // 网站logo
  language: 'zh', //设置默认访问语言：zh, en
  crisp: '1d4639a7-3e57-4706-a7f7-5968179bcdde', //填写了会加载crisp
  currency: 'CNY', //货币符号
  currency_symbol: '￥', //货币单位
  telegram_discuss_link: 'https://t.me/Heycloud_official666', //TG频道
  is_telegram: 1, //1-开启TG绑定，0-关闭
  commission_withdraw_method: ['USDT'], //提现方式
  cloudflare: {
    siteKey:"",  //这个非空值,发送注册邮件会弹出Cloudflare Turnstile验证
    // token:"",
  },
  // 客户端列表
  clients: {
    windows: {
      download_url: '/articles/read?id=7', // 下载地址
      version: '1.7.7', // 教程地址
    },
    macos: {
      download_url: '/articles/read?id=5',
      version: '1.3.8',
    },
    android: {
      download_url: '/articles/read?id=2',
      version: '2.24.3',
    },
    ios: {
      download_url: '/articles/read?id=1',
      version: '2.2.56',
      video: '/download/video/ios.mp4', //视频地址
    },
  },

  show_reg_tos: 1,//0不显示注册页面的服务条款，1显示
  //购买页面
  coupon_open: 1, //0不显示输入优惠劵输入框，1显示
  discount: '',  //这个非空值则会弹窗 discount_img
  discount_img: '', //这个非空值购买页面则会弹窗 discount_img
  // v2b的后端支持礼品卡功能
  giftCard: {
    open: 1, //0-关闭兑换码功能，1-开启
    title: '没有兑换码？ 点我购买',
    url: 'https://跨越长城.com',
  }
}
