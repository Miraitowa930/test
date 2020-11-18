<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-17 17:57:36
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-10-24 15:22:10
-->
<template>
    <div class="page-product">
        <el-row class="m-crumbs">
            <m-crumbs />
        </el-row>
        <el-row>
            <el-col :span="19">
                 <el-row>category</el-row>
                 <el-row>list</el-row>
            </el-col> 
            <el-col :span="5">地图+推荐</el-col>
        </el-row>
    </div>
</template>
<script>
import MCrumbs  from '@/components/products/crumbs.vue'
export default {
     components:{
         MCrumbs,
     }
}
</script>
<style lang="scss">
  @import '@/assets/css/products/index.scss'
</style>