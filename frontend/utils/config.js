/*
 *    reate by lzk
 */
let backendUrl = {
  production: '/haimacloud',
  testing: '',
  pre: '',
  rel: '',
  dev: '',
  local: '',
  mock: ''
}

let url;
if(process.env != {}){
  // process.env.HAIMA_ENV = 'testing';
  if (process.env.HAIMA_ENV === 'production') {
    url = backendUrl.production
  }else if(process.env.HAIMA_ENV === 'testing'){
    url = backendUrl.testing
  }else if(process.env.HAIMA_ENV === 'dev'){
    url = backendUrl.dev
  }else if(process.env.HAIMA_ENV === 'pre'){
    url = backendUrl.pre
  }else if(process.env.HAIMA_ENV === 'rel'){
    url = backendUrl.rel
  } else {
    url = backendUrl.local
  }
}else{
  url = backendUrl.local
}


module.exports = {
  pageSize: 20,
  API: {
    login:`${url}`,
    sendsms:`${url}`,
    imgCode:`${url}`,
    register:`${url}`,
    findPassword:`${url}`,
    productList:`${url}`,
    usercollect:`${url}`,
    usertopup:`${url}`,
    download:`${url}`,
    recommendList:`${url}`,
    pswreset:`${url}`,
    addUser:`${url}`,
    productdetail:`${url}`,
    collectlist:`${url}`,
    downloadslist:`${url}`,
    logout:`${url}`,
    weixin:`${url}`,
    newslist:`${url}`,
    joblist:`${url}`,
    jobdetail:`${url}`,
    positionlist:`${url}`,
    positiondetail:`${url}`,
    mainreportlist:`${url}`,
    mainnewsreportlist:`${url}`,


},
  channelId: '000002946',
  orderDetailTimer:1000*60*5,
  startTimer:1000*15,
}
