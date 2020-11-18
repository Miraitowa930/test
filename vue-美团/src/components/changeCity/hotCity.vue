<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-22 17:27:13
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-10-22 17:53:05
-->
<template>
  <div class="m-hcity">
     <dl>
         <dt>{{ title}}</dt>
         <dd v-for="(item,index) in list" :key="index" >{{ item }}</dd>
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