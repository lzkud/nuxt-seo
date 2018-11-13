import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import { Loading, Message } from 'element-ui'
let CONFIG={
  timeout:100000
}
let that

/*
 * 拦截器
 *
 * */
function ajaxs (options,vm){
  that = vm
    var optDefault = {
      method: 'post',
      timeout: CONFIG.timeout,
      withCredentials: true

    }
    if(options.params || options.params == ''){
      optDefault.method = 'get'
    }
    var opt = Object.assign({}, optDefault, options);
    return axios(opt)
}
axios.interceptors.request.use(config => {
  // element ui Loading方法
  return config
}, error => {

  Message({
    duration:1500,
    message: data.error_message,
    center:true,
    type: 'error'
  });
  return Promise.reject(error)
})
axios.interceptors.response.use(
  response => {
  let data = response.data
  let code = data.return_code
  debugger
  if (code == 1000) {     //成功
    return response;
  } else if (code == 1999) {      //未登录
    Message({
      duration:1500,
      message: data.error_message,
      center:true,
      type: 'error'
    });
    jumpRouter(data)
    return Promise.reject(response);
  } else if (code == 1404) {      //没有数据
    jumpRouter(data)
    Message({
      duration:1500,
      message: data.error_message,
      center:true,
      type: 'error'
    });
    return response;
  } else if (code == 1003) {      //没有数据
    jumpRouter(data)
    // Message({
    //   duration:1500,
    //   message: data.error_message,
    //   center:true,
    //   type: 'error'
    // });
    return Promise.reject(response);
  } else {
    jumpRouter(data)
    Message({
      duration:1500,
      message: data.error_message,
      center:true,
      type: 'error'
    });
    return Promise.reject(response)
  }
},
error => {
  if (error.message == 'Network Error') {
    error.message = '网络出错'
  }
  Message({
    duration:1500,
    message: error.message,
    center:true,
    type: 'error'
  });
  return Promise.reject(error)
}
)
function jumpRouter(data) {
  if(that){
    if(data.return_code == 1999){
      that.$router.push({path:'/login/login'})
    }else if(data.return_code == 1404){
      that.$router.push({path:'/error'})
    }else if(data.return_code == 1003){
      that.$router.push({path:'/'})
    }/*else{
      that.$router.push({path:'/eror'})
    }*/
  }

}

export default ajaxs
