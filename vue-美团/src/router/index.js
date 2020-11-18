/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2020-10-10 16:04:37
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-10-24 14:47:23
 */
import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'
import GoodsList from '@/page/goodsList.vue'
import Index from '@/page/index.vue'
import ChangeCity from '@/page/changeCity.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'default',
      component: defaultPage,
      redirect:'./index',   //重定向，直接定位到index页;
      children: [{
        path: '/index',
        name: 'index',
        component: Index
      },{
        path:'/changeCity',
        name:'changeCity',
        component:ChangeCity
      },{
        path:'/goodsList',
        name:'goodsList',
        component:GoodsList
      }]
    },
    {
      path: '/blank',
      name: 'page-blank',
      component: blankPage
    },
  

  ]
})
