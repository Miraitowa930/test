<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-22 18:11:10
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-10-23 15:01:44
-->
<template>
    <div class="categroy">
        <dl class="m-categroy">
            <!-- <dt>按拼音首字母选择:</dt> -->
            <dt>按拼音首字母选择:</dt>
            <dd v-for="(item,index) in wordList" :key="index">
                <a :href=" '#city-' + item">
                    <span> {{ item }} </span>                        
                </a>
            </dd>
        </dl>
         <dl class="m-categroy-section" v-for="(item,index) in cityGroup" :key="index" :id=" 'city-' + index">
             <dt >{{index}}</dt>
             <dd >
                <span v-for="city in item" :key="city.id"> {{city.name}}</span>
             </dd>
         </dl>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            wordList:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
            cityList:[],
            cityGroup:{},

        }

    },
    created(){
        var data = [{
            "id":1,
            "name":"北京",
            "pinyin":"beijing",
            "acronym":'bj',
            "rank":'S',
            "firstChar":'b'
        },{
             "id":2,
            "name":"上海",
            "pinyin":"shanghai",
            "acronym":'sh',
            "rank":'S',
            "firstChar":'s'
        },{
             "id":3,
            "name":"广州",
            "pinyin":"guangzhou",
            "acronym":'gz',
            "rank":'S',
            "firstChar":'g'
        },{
             "id":4,
            "name":"四川",
            "pinyin":"sichuan",
            "acronym":'sh',
            "rank":'S',
            "firstChar":'s'
        }];
        var obj={}
        data.forEach((item,index)=>{
            if(!obj[item.firstChar.toUpperCase()]){
                  obj[item.firstChar.toUpperCase()] = [];
            }
            obj[item.firstChar.toUpperCase()].push(item);
        });
       this.cityGroup = obj;

    }

}
</script>
<style lang="scss">
  @import '@/assets/css/changecity/categroy.scss'
</style>
