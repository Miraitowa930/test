/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2020-10-10 16:04:37
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-10-21 14:57:26
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'


Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.directive('document-click', {
   bind(el,binding,vnode){
    console.log('-----',el,binding,vnode);
    document.addEventListener('click',binding.value,false)
   },
   inserted(){
     console.log('inserted');
   },
   update(){
     console.log('update')
   }
  
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
