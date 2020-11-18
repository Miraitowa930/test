<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-15 12:50:00
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-11-02 17:31:20
-->
<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class ">
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{ active: kind == item.tab }"
        :data-type="item.tab"
      >
        {{ item.text }}
      </dd>
      <!-- <dd :class="{active :kind == 'food'}" data-type="food">约会聚餐</dd>
      <dd :class="{active :kind == 'SPA'}" data-type="SPA">丽人SPA</dd>
      <dd :class="{active :kind == 'movie'}" data-type="movie">电影演出</dd>
      <dd :class="{active :kind == 'travel'}" data-type="travel">品质出游</dd> -->
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in resultList[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{ item.title }}</div>
            <div class="sub-title" :title="item.sub_title">
              {{ item.sub_title }}
            </div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="pricce-symbol numfont">￥</span>
                <span class="current-price numfont">{{
                  item.price
                }}</span>
              </span>
              <span class="old-price"
                >门市价￥{{ item.price }}</span
              >
              <span class="sold bottom-right-info">{{ item.address }}</span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      kind: "all",
      resultList:{},
      // list: [
      //   {
      //     image:
      //       "http://p0.meituan.net/enhancedimage/b4220afd0d2c21fe39d2108e4c17aabf92830.jpg@740w_416h_1e_1c",
      //     title: "【温馨两居山景房】",
      //     sub_title: "整套两居室，可居住三人",
      //     price_info: {
      //       current_price: 119,
      //       old_price: 150,
      //     },
      //     address: "泰山山下",
      //   },
      //   {
      //     image:
      //       "http://p0.meituan.net/enhancedimage/b4220afd0d2c21fe39d2108e4c17aabf92830.jpg@740w_416h_1e_1c",
      //     title: "【温馨两居山景房】",
      //     sub_title: "整套两居室，可居住三人",
      //     price_info: {
      //       current_price: 119,
      //       old_price: 150,
      //     },
      //     address: "泰山山下",
      //   },
      //   {
      //     image:
      //       "http://p0.meituan.net/enhancedimage/b4220afd0d2c21fe39d2108e4c17aabf92830.jpg@740w_416h_1e_1c",
      //     title: "【温馨两居山景房】",
      //     sub_title: "整套两居室，可居住三人",
      //     price_info: {
      //       current_price: 119,
      //       old_price: 150,
      //     },
      //     address: "泰山山下",
      //   },
      //   {
      //     image:
      //       "http://p0.meituan.net/enhancedimage/b4220afd0d2c21fe39d2108e4c17aabf92830.jpg@740w_416h_1e_1c",
      //     title: "【温馨两居山景房】",
      //     sub_title: "整套两居室，可居住三人",
      //     price_info: {
      //       current_price: 119,
      //       old_price: 150,
      //     },
      //     address: "泰山山下",
      //   },
      //   {
      //     image:
      //       "http://p0.meituan.net/enhancedimage/b4220afd0d2c21fe39d2108e4c17aabf92830.jpg@740w_416h_1e_1c",
      //     title: "【温馨两居山景房】",
      //     sub_title: "整套两居室，可居住三人",
      //     price_info: {
      //       current_price: 119,
      //       old_price: 150,
      //     },
      //     address: "泰山山下",
      //   },
      //   {
      //     image:
      //       "http://p0.meituan.net/enhancedimage/b4220afd0d2c21fe39d2108e4c17aabf92830.jpg@740w_416h_1e_1c",
      //     title: "【温馨两居山景房】",
      //     sub_title: "整套两居室，可居住三人",
      //     price_info: {
      //       current_price: 119,
      //       old_price: 150,
      //     },
      //     address: "泰山山下",
      //   },
      // ],
    };
  },
  props: [
      "nav"
      ],
      created(){
        api.getResultList().then((res)=>{
          console.log("wwwwww",res)
          this.resultList = res.data.data;
        })
      },
  methods: {
    over(e) {
      console.log(e);
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      //  console.log(tagName)
      if (tagName !== "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
      //内容也发生变化；利用ajax动态请求后台，进行数据的变更；
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>