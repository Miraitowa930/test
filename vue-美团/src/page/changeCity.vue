<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-13 23:46:55
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-10-22 19:22:04
-->
<template>
    <div class="page-changeCity">
        <el-row>
            <province />
        </el-row>
        <el-row >
            <!-- 热门城市 -->
            <hot-city title="热门城市"  :list="hotList" />
        </el-row>
        <el-row>
            <!-- 最近访问 -->
             <hot-city title="热门城市"  :list="rencentList" />
        </el-row>
        <el-row>
            <word-choose  />
        </el-row>
    </div>
</template>
<script>
import Province  from '@/components/changeCity/province.vue'
import  HotCity  from '@/components/changeCity/hotCity.vue'
import  RencentCity  from '@/components/changeCity/rencent.vue'
import  WordChoose  from  '@/components/changeCity/wordChoose.vue'
export default {
    data(){
        return{
            hotList:["西安","烟台","宝鸡","青岛"],
           rencentList:["西安","烟台","宝鸡","青岛"]
        }
    },
components:{
   Province,
   HotCity,
   WordChoose

}
}
</script>