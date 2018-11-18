<template>
    
  <div class="show">
    <mt-header fixed title="技能总览"></mt-header>

    <div class="card" v-for="item in skillList">
            <div class="card-header">发布者:{{item.Sname}}</div>
            <div class="card-content">
            <div class="list-block media-list">
                <ul>
                <li class="item-content">
                    <div class="item-media">
                    <img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="44">
                    </div>
                    <div class="item-inner">
                    <div class="item-title-row">
                        <div class="item-title">技能介绍:</div>
                    </div>
                    <div class="item-subtitle">{{item.SskillIntro}}</div>
                    </div>
                </li>
                </ul>
            </div>
            </div>
            <div class="card-footer">
            <span>佣金情况:{{item.Ssalary}}</span>
            </div>
            <div class="card-footer">
            <span>联系方式:{{item.SotherWay}}</span>
            </div>
    </div>
    
    



  </div>
    
</template>


<script>
    import {Toast} from 'mint-ui';
    export default{
      data(){
        return{
          skillList:[]
        }
      },
      created() {
        this.getSkillList();
      },
      methods:{
        getSkillList(){
          //后台请求数据
          this.$http.get("http://192.168.43.218:9009/getSkill").then(result=>{
            // console.log(result.body.data);
            if(result.body.code==1){
              this.skillList = result.body.data;
            }else{
              Toast("获取数据失败");
            }
          });
        }
        
      }
    }
</script>


<style lang="less" scoped>
    .show{
      // height:auto;
      margin-top:15%;
      .mint-header{
        background:#85138c;
      }
    }
</style>