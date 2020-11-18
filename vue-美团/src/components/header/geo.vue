<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-10 17:07:34
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-10-17 19:20:57
-->
<template>
<div class="m-geo">
    <div class="position">
        <i class="el-icon-location" />
        北京
        <router-link class="changeCity" :to="{ name:'changeCity' }">
        切换城市
        </router-link>
        [
        <a href="#">大厂回族自治县</a>
        <a href="#">廊坊</a>
        <a href="#">固安县</a>
        ]
    </div>
    <div class="m-user">
        <router-link  class="login" :to="{name : 'login'}">
        立即登录
        </router-link>
        <router-link class="register" :to="{name : 'register'}">
          注册
        </router-link>
    </div>

</div>
    
</template>
<script>
export default {

}
</script>
