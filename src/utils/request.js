import axios from 'axios'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // api的base_url
  timeout: 50000000, // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
  NProgress.start();
  return config
}, error => {
  // Do something with request error
  Promise.reject(error)
});

let errorCode = [1001,2001,2005,2006,2007,1002,2008,2009,2010];

// respone拦截器
service.interceptors.response.use(
  response => {
    NProgress.done();
    const res = response.data;
    if(errorCode.indexOf(res.code) != -1){
      Message({
        message: res.msg,
        type: 'error',
        duration: 5 * 1000
      });
    }
    if (res.code < 0||res.errorCode<0) {
      Message({
        message: res.errorMessage,
        type: 'error',
        duration: 5 * 1000
      });
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    NProgress.done();
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error)
  }
)


export default service
