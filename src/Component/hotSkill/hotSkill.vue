<template>
    
    <div class="index">
        <!--搜索框部分-->
        <mt-search
            cancel-text="取消"
            placeholder="请输入你想搜索的内容">
        </mt-search>
        <mt-swipe>
            <mt-swipe-item>
                <img src="../imgResource/h1.jpg">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../imgResource/h2.jpg">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../imgResource/h3.jpg">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../imgResource/h4.jpg">
            </mt-swipe-item>
        </mt-swipe>

        <div class="card">
            <div class="card-header">热门搜索</div>
            <div class="card-footer" v-for="item in show">{{item}}</div>
        </div>
    </div>
    
</template>


<script>
//$store.commit('switch_dialog')
    import { Toast } from 'mint-ui';
    import {mapActions,mapState} from 'vuex';
    export default{
      computed:{
          //... 扩展运算符
          ...mapState({
              show:state=>state.show
          })
      },
      data(){
          return{
              hotSkill:''
          }
      },
      created() {
        //   this.$store.dispatch('switch_dialog1');
        //   this.show();
        // show();
          //console.log();
          //如果非法访问,看看是否已经登录,如果没有登录,则跳回登录页
          if(!localStorage.getItem("isLogin") || localStorage.getItem("isLogin")!=1){
            // console.log("未登录");
            window.location.hash = "#/login";
          }
      }
    //   computed:{
    //       show(){
    //           return this.$store.dispatch('switch_dialog1');
    //       }
    //   }
    }
</script>


<style lang="less">
    .index{

        .mint-search{
            height:auto;
            margin-top:1%;
        }
        .mint-searchbar{
            background-color: transparent;
            border: 1px solid #ccc;
            width: 75%;
            height:5%;
            position: relative;
            left: 50%;
            margin-left: -35%;
            border-radius: 37px;
            top:2%;

            .mint-searchbar-core{
                color: brown;
                font-size: 16px;
            }
            .mintui-search:before {
                content: "\E604";
                font-size: 25px;
                color: black;
            }
        }

        .mint-swipe-items-wrap{
            margin-top:10px;
            height:210px;

            .mint-swipe-item{
                background:red;
                img{
                    width:100%;
                }
            }
        }
    }
    
    .mint-tab-item-label {
        color:#080608;
        font-size: 15px;
        line-height: 1;
    }
    .mint-tabbar{
        background-color:#fff;
        border-top:2px solid #brown;
        a{
            text-decoration:none;
        }
    }
    // .selected{
    //     background: chocolate;
    //     .mint-tab-item-label{
    //         color:white;
    //     }
    // }
</style>