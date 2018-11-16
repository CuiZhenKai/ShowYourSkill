<template>
    
    <div class="index">

        <router-view></router-view>


        <!--底部tab栏部分-->
        <mt-tabbar v-model="hotSkill" v-if="display">
            <router-link to="/" class="width25">
                <mt-tab-item id="hotSkill" >
                    <img slot="icon" src="Component/imgResource/hot.png">
                    热门
                </mt-tab-item>
            </router-link>
            <router-link to="/show" class="width25">
                <mt-tab-item id="showSkill">
                    <img slot="icon" src="Component/imgResource/show.png">
                    发布
                </mt-tab-item>
            </router-link>
            
            <router-link to="/news" class="width25">
                <mt-tab-item id="News">
                    <img slot="icon" src="Component/imgResource/news.png">
                    资讯
                </mt-tab-item>
            </router-link>

            <router-link to="/me" class="width25">
                <mt-tab-item id="me">
                    <img slot="icon" src="Component/imgResource/me1.png">
                    我的
                </mt-tab-item>
            </router-link>
        </mt-tabbar>
        
    </div>
    
</template>


<script>
    import { Toast } from 'mint-ui';
    export default{
      data(){
          return{
              hotSkill:'hotSkill',
              display:false
          }
      },
      created() {
         this.displayTab(); 
      },
      methods:{
          displayTab(){
            //   console.log(window.location.hash);
            if(window.location.hash === "#/"){
                this.display = true;
            }
            if(window.location.hash === "#/show"){
                this.display = true;
            }
            if(window.location.hash === "#/me"){
                this.display = true;
            }
            if(window.location.hash === "#/news"){
                this.display = true;
            }
          }
      },
      watch:{
          "$route":"displayTab"
      }
    }
</script>


<style lang="less" scoped>
    
    
    .mint-tabbar{
        background-color:#fff;
        border-top:2px solid #brown;
        a{
            text-decoration:none;
            color:black;
            font-size:15px;
        }
    }
    .width25{
        width:25%;
    }
</style>