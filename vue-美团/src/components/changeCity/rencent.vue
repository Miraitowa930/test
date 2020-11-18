<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-22 17:53:38
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-10-22 17:59:48
-->
<template>
    <div class="recent-city">
        <dl>
            <dt>{{ title }}</dt>
            <dd v-for="(item,index) in list" :key="index">{{ item }}</dd>
        </dl>
    </div>
</template>
<script>
export default {
    props:[
        "title",
        "list"
    ]
}
</script>
<style lang="scss">
@import  "@/assets/css/changeCity/hot.scss"

</style>