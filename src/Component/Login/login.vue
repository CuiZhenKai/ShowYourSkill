<template>
    
    <div class="login" id="login" :style="backgroundDiv">
        <div class="row">
            <div class="col-md-1 header">
               <div class="col-md-1"></div>
               <div class="col-md-10 logo">
                   <span class="glyphicon glyphicon-leaf"></span>
                   Show Your Skills!
               </div>
               <div class="col-md-1"></div>
            </div>
            <div class="col-md-1">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="form-group has-success has-feedback">
                        <label class="control-label" for="user"></label>
                        <div class="input-group">
                            <span class="input-group-addon">用户名</span>
                            <input type="text" class="form-control inputGroupSuccess1" id="user" aria-describedby="inputGroupSuccess1Status" style="color:white;" v-model="username">
                        </div>
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="form-group has-success has-feedback">
                        <label class="control-label" for="pwd"></label>
                        <div class="input-group">
                            <span class="input-group-addon">密码</span>
                            <input type="password" class="form-control inputGroupSuccess1" id="pwd" aria-describedby="inputGroupSuccess1Status" style="color:white;" v-model="userpwd">
                        </div>
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <mt-button plain type="primary" size="large" @click="goToLogin()">我要登录</mt-button>
                </div>
                <div class="col-md-1"></div>
            </div>
            <div class="col-md-1">
               <div class="col-md-1"></div>
               <div class="col-md-5">
                    <router-link to='/findPwd' class="left">忘记密码?</router-link>
                   <router-link to='/register' class="right">新用户注册</router-link>
               </div>
               <div class="col-md-1"></div>
            </div>
            <div class="col-md-1 bottom">
                <div class="col-md-12">
                    <a href="javascript:;">第三方登录
                        <span class="glyphicon glyphicon-transfer"></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import { Toast } from 'mint-ui';
    import store from '../../vuex/store.js';
    export default{
        data(){
            return {
                backgroundDiv:{
                    backgroundImage:'url('+require('../imgResource/bigq.jpg')+')'
                },
                //用户名
                username:'',
                //密码
                userpwd:''
            }
        },
        created() {
            
        },
        methods:{
            //实现登录业务的处理
            //去登录
            goToLogin(){
                // console.log("1");
                if(!this.username||!this.userpwd){
                    Toast({
                        message: '请输入用户名或者密码',
                        iconClass: 'glyphicon glyphicon-edit',
                        duration:1350
                    });
                    return;
                }
                let Username = this.username;
                let UserPwd = this.userpwd;
                this.$http.post("http://192.168.43.218:9009/dologin",{Username,UserPwd}).then(result=>{
                    // console.log(result);
                    let code = result.body.code;
                    switch(code){
                        case -1:
                            Toast({
                                message: '用户名不存在或者密码不正确',
                                iconClass: 'glyphicon glyphicon-send',
                                duration:1350
                            });
                            break;
                        case 3:
                            Toast({
                                message: '服务器出错',
                                iconClass: 'glyphicon glyphicon-remove',
                                duration:1350
                            });
                            break;
                        default:
                            Toast({
                                message: '登录成功,SYS欢迎您',
                                iconClass: 'glyphicon glyphicon-hand-up',
                                duration:1350
                            });
                            //登录成功,跳转到首页
                            //使用store和localstorge联合存储
                            // this.$store.commit('isLogin',result.status);
                            localStorage.setItem("isLogin",1);
                            localStorage.setItem("username",Username);
                            // console.log(result);
                            window.location.hash = "#/";
                            break;
                    }
                });
            }
        }
    }
</script>


<style lang="less" scoped>
    .login{
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        position: absolute;
        overflow:hidden;
        .header{
            margin-top: 100px;
            margin-bottom: 20px;
        }
        .logo{
            color: white;
            font-size: 24px;
            font-weight: bold;
        }


    }
    .input-group-addon{
        border-color: whitesmoke;
        background-color: transparent;
        color: #38a2ff;
        width: 100px;
    }
    .inputGroupSuccess1{
        height: 53px;
        border-color: whitesmoke;
        background-color: transparent;
    }
    .form-control-feedback{
        color: #38a2ff;
        margin-top: 5px;
    }
    .form-group {
        margin-bottom: 0px;
    }
    .mint-button, .mint-button--primary, .mint-button--large,.is-plain{
        margin-top: 15px;
        background-color:rgba(56, 162, 255, 0.75);
        color: white;
        font-weight: normal;
        border: none;
    }
    .right{
        float: right;
        color: #38a2ff;
    }
    .left{
        float: left;
        color: #38a2ff;
    }
    .bottom{
        position: absolute;
        width: 140px;
        bottom: 0;
        text-align: center;
        left: 50%;
        margin-left: -70px;
        a{
            color: white;
            text-decoration: none;
            font-size: 14px;
        }
    }
</style>