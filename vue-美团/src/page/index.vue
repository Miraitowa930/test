<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-13 23:32:57
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-11-02 17:42:31

-->
 <template>
    <div class="page-index">
        <el-row>
            <el-col :span="5">
               <m-menu/>
            </el-col>
            <el-col :span="19">
                <m-life/>
               
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
               <m-container :nav= "navList" />
            </el-col>
            <el-col :span="24">
               <m-container :nav = "nav1List" />
            </el-col>

        </el-row>

    </div>
</template>
<script>
import MMenu from '@/components/index/menu.vue'
import MLife from '@/components/index/life.vue'
import MContainer  from '@/components/index/container.vue'

export default {
    data(){
        return{
            navList:{
                class:'gediao',
                title:"有格调",
                list:[{
                     text:'全部',
                     tab:'all',
                },{
                    text:'约会聚餐',
                    tab:'food',
                },
                {
                    text:'丽人SPA',
                    tab:'spa'
                },{
                    text:'电影演出',
                    tab:'movie',

                },{
                    text:'品质演出',
                    tab:'travel',
                }]
            },
            nav1List:{
                class:"youhui",
                title:"有优惠",
                list:[{
                    text:'全部',
                    tab:'all'
                },{
                    text:'美食',
                    tab:'food',
                },{
                    text:'休闲',
                    tab:'xiuxian'
                }]
            }
        }

    },
     components:{
           MMenu,
           MLife,
           MContainer

     }
}
</script>
<style lang="scss">
@import  "@/assets/css/index/index.scss";
@import  "@/assets/css/index/life.scss";

</style>

