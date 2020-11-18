<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-21 10:50:15
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-10-23 16:21:40
-->
<template>
  <div class="choose-wrap" @click="onclick"  v-document-click="onblur">
    <div class="choose" >
      <span>{{ value }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content':true, 'active':showWapperActive } ">
        <h2>{{ title }}</h2>
        <div class="wrapper">
          <div class="col">
            <span :class="{'mt-item' : true,'active': item == value}" v-for="(item, index) in list" :key="index" @click="changeValue(item)">
                {{item}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["list", "title", "value","showWapperActive"],
  data() {
    return {

    };
  },
  methods: {
    onclick(e) {
        e.stopPropagation();
    //    this.showWapperActive = true;
    this.$emit('change_active',true)
    },
    onblur(){
       console.log('document-click')
        // this.showWapperActive = false;
         this.$emit('change_active',false)
    },
    changeValue(item){
       this.$emit('change',item)
    }
  },
};
</script>
<style lang="scss">
@import "@/assets/css/changeCity/select.scss";
</style>