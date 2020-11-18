<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-21 10:33:43
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-10-23 16:17:42
-->
<template>
    <div>

        <span class="name">按省份选择:</span>
        <m-select 
           :list="provinceList" 
            title="省份"  
            :value="province"  
            :showWapperActive="provinceActive"  
            @change_active="changeProvinceActive" 
            @change="changeProvince"
        
          />
        <m-select 
        :list="cityList" 
        title="城市" 
        :value="city" 
        :showWapperActive="cityActive" 
         @change_active="changeCityActive"
         @change="changeCity"
          />
        <span>直接搜索:</span>
  <el-select
           v-model="searchWord"
           filterable
           remote
           reserve-keyword
           placeholder="请输入关键词"
          :remote-method="remoteMethod"
          :loading="loading"
         >
           <el-option
               v-for="(item,index) in searchList "
               :key="index"
               :label="item"
               :value="item">
    </el-option>
  </el-select>
    </div>
</template>
<script>
import MSelect from '@/components/changeCity/select.vue'
export default {
    data(){
        return{
           provinceList:["山东","陕西","北京","山西","甘肃","江西","江苏","广东","四川","重庆","天津","新疆","东北","广西"],
           province:"省份",
           cityList:["西安","烟台","宝鸡","青岛"],
           city:"城市",
           provinceActive:false,
           cityActive:false,
           searchList:["西安","烟台","宝鸡","青岛"],
           searchWord:'',
           loading:false,

       }
    },
    methods:{
        changeProvinceActive(flag){
            this.provinceActive = flag;
            if(flag){
            this.cityActive = false;
            }
        },
        changeCityActive(flag){
            this.cityActive = flag;
            if(flag){
                this.provinceActive = false;
            }
        },
        changeProvince(value){
            this.province= value;

        },
        changeCity(value){
            this.city = value;
        },

        remoteMethod(val){
          console.log(e)
          //传给后台数据
        }

    },
  components:{
      MSelect,
  }
}
</script>
<style lang="scss">
 @import '@/assets/css/changeCity/iselect.scss';

</style>
