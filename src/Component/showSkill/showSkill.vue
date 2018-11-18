<template>
    
  <div class="show">
    <mt-header fixed title="发布技能"></mt-header>
    <mt-field label="联系方式" placeholder="请输入联系方式,例如QQ" type="text" v-model="otherWay"></mt-field>
    <mt-field label="技能简介" placeholder="请输入技能简介" type="textarea" rows="4" v-model="skillIntro"></mt-field>
    <mt-field label="心仪佣金" placeholder="请输入心仪的佣金" v-model="salary"></mt-field>
    <mt-button type="primary" size="large" @click="submitSkill">发布技能</mt-button>
    <div class="alert alert-warning alert-dismissible" role="alert">
      <strong>温馨提示:</strong>联系方式是必须要填的
    </div>
  </div>
    
</template>


<script>
    import {Toast} from 'mint-ui';
    export default{
      data(){
        return{
          otherWay:'',
          skillIntro:'',
          salary:''
        }
      },
      methods:{
        submitSkill(){
          // console.log("1");
          let otherWay = this.otherWay;
          let skillIntro = this.skillIntro;
          let salary = this.salary;
          let username = localStorage.getItem("username");
          //进行输入框的验证
          if(!otherWay){
            Toast("请输入联系方式");
            return;
          }
          if(!skillIntro){
            Toast("请输入技能简介");
            return;
          }
          if(!salary){
            Toast("你还没有输入期望的佣金");
            return;
          }
          //发送到后端进行存储
          this.$http.post("http://192.168.43.218:9009/saveSkill",{otherWay,skillIntro,salary,username}).then(result=>{
            // console.log(result);
            let code = result.body.code;
            switch(code){
                  case 3:
                      Toast({
                          message: '服务器出错',
                          iconClass: 'glyphicon glyphicon-remove',
                          duration:1350
                      });
                      break;
                  default:
                      Toast({
                          message: '发布技能成功',
                          iconClass: 'glyphicon glyphicon-hand-up',
                          duration:1350
                      });
                      window.location.hash = "#/";
                      break;
              }
          })
        }
      }
    }
</script>


<style lang="less" scoped>
    .show{
      margin-top:15%;
      .mint-header{
        background:#771111;
      }
      .mint-cell-wrapper{
        border-bottom:1px solid #000;
      }
      .alert-warning{
        margin-top:4%;
      }
    }
    
</style>