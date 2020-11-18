<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-10 16:07:20
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-10-21 10:17:50
-->
<template>
  <div class="layout-default">
    <el-container>
      <el-header height="">
        <my-header/>

      </el-header>
      <el-main>
        <router-view></router-view> 
      </el-main>
      <el-footer height="">
        <my-footer/>
        
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import MyHeader from '@/components/header/index.vue';
import  MyFooter from '@/components/footer/index.vue';
export default {
    // name:'pageDefult'
    components:{
        MyHeader,
        MyFooter,

    }
};
</script>
<style lang="scss">
   @import  '@/assets/css/public/layout.scss';
   @import '@/assets/css/public/footer.scss';
</style>