<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-10 16:08:50
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-10-13 14:47:29
-->
<template>
<div class="m-header">
    <el-row>
        <top-bar/>
    </el-row>
    <el-row>
        <search-bar/>
    </el-row>
</div>
    
</template>
<script>
import topBar from './topBar.vue';
import searchBar from './searchBar.vue'
export default {
    components:{
        topBar,
        searchBar,
    }

}
</script>