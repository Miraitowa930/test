/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-11-02 14:39:35
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-11-02 14:47:57
 */
import axios from 'axios'

// 添加请求拦截器
axios.defaults.baseURL = 'https://open.duyiedu.com';
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log(config);
    config.params = {
        ...config.params,
        appkey:'qiyuan_707_1575773876036'
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

  export default axios;