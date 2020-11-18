<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-14 09:12:41
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-11-02 16:49:34
-->
<template>
  <div class="m-menu">
      <dl class="nav" @mouseleave="leave">
          <dt>全部分类</dt>
          <!-- <dd>美食</dd> -->
         <dd class="nav-dd" v-for="(item,index) in menuList" :key="index" @mouseenter="enter(item)">
             <i :class="item.type" ></i>
             {{ item.name }}
             <span class="arrow"></span>
         </dd> 
        
      </dl>
      <div v-if="curDetail" class="detail"  @mouseenter="detailEnter" @mouseleave="detailLeave">
        <template  v-for="(item,index) in curDetail.items">
            <h2 :key="index">{{ item.title }}</h2>
            <span v-for="(v,i) in item.items" :key="v + '_' + i">{{ v }}</span>
        </template>
      </div>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
    data(){
        return{
            curDetail:null,
            menuList:[],
            // menuList:[{
            //     title:"美食",
            //     icon:"food",
            //     children:[{
            //         title:"美食",
            //         children:['代金券','甜点饮品','火锅自助餐','小吃','快餐','日韩料理','西餐']
            //     }]
            // },{
            //     title:'外卖',
            //     icon:"takeout",
            //     children:[{
            //         title:"外卖",
            //         children:['美团外卖']
            //     }]
            // },{
            //     title:'酒店',
            //     icon:'hotel',
            //     children:[{
            //         title:'酒店星级',
            //         children:['经济型','舒适/三星','高档/四星','豪华/五星']
            //     }]

            // },{
            //      title:'民宿',
            //     icon:'homestay',
            //     children:[{
            //         title:'热门城市',
            //         children:['上海','成都','北京','西安','重庆']
            //     },{
            //         title:'热门房源',
            //         children:['别墅','小复式']
            //     }]

            // },{

            // }]
        }
    },
    created(){
       api.getMenuList().then((res)=>{
           console.log('2222',res);
           this.menuList = res.data.data;
       })

    },
    methods:{
        enter(item){
            console.log(item)
           this.curDetail = item;
        },
        leave(){
            let _self = this;
            this.timer = setTimeout(function(){
                   _self.curDetail = null;
            },100)
        },
        detailEnter(){
          clearTimeout(this.timer);
        },
        detailLeave(){
             this.curDetail = null;
        }
    }

};
</script>