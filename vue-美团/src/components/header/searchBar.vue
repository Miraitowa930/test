<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-10 16:09:08
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-11-02 16:16:25
-->
<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img
          src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
          alt="美团"
        />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            placeholder="请输入内容"
            @focus="focus"
            @blur="blur"
            @input="input"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>最近搜索</dt>
            <dd v-for="(item, index) in hotPlaceList" :key="index">
              <router-link :to="{ name: 'goods', params: { name: item } }">{{
                item
              }}</router-link>
            </dd>
            <!-- <dd>
              <router-link to="/s"> 京东第一温泉度假村 </router-link>
            </dd>
            <dd>
              <router-link to="/s"> 99旅馆连锁 </router-link>
            </dd>
            <dd>
              <router-link to="/s"> 尚客优快捷酒店 </router-link>
            </dd>
            <dd>
              <router-link to="/s"> 七天连锁酒店 </router-link>
            </dd> -->
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <!-- <dd>
              <router-link to="/s"> 火锅 </router-link>
            </dd>
            <dd>
              <router-link to="/s"> 火锅自助餐 </router-link>
            </dd>
            <dd>
              <router-link to="/s"> 火锅 重庆 </router-link>
            </dd> -->
            <dd v-for="(item, index) in searchList" :key="index">
              <router-link to="/s">{{ item }}</router-link>
            </dd>
          </dl>
        </div>
        <!-- <p class="suggest">
          <a href="#">京东第一温泉度假村</a>
          <a href="#">99旅馆连锁</a>
          <a href="#">尚客优快捷酒店</a>
          <a href="#">七天连锁酒店</a>
        </p> -->
      </el-col>
    </el-row>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      searchWord: "",
      // isHotPlace:false,
      // isSearchList:false,
      isFocus: false,
      hotPlaceList:[],
      searchList: [],
    };
  },
  created() {
      api.searchHotWord().then((res) => {
        this.hotPlaceList = res.data.data;
        // console.log(res);
      });
  },
  computed: {
    isHotPlace: function () {
      return this.isFocus && !this.searchWord;
    },
    isSearchList: function () {
      return this.isFocus && this.searchWord;
    },
  },

  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      let _self = this;
      setTimeout(function () {
        _self.isFocus = false;
      }, 200);
    },
    input() {
      // console.log(this.searchWord)
      let val = this.searchWord
       api.getSearchList().then( (res) => {
          console.log("这里" + res);
          this.searchList = res.data.data.list.filter((item,index) =>{
              return item.indexOf(val) > -1;
          });
        });
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>