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
                            <input type="text" class="form-control inputGroupSuccess1" id="user" aria-describedby="inputGroupSuccess1Status">
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
                            <input type="password" class="form-control inputGroupSuccess1" id="pwd" aria-describedby="inputGroupSuccess1Status">
                        </div>
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <mt-button plain type="primary" size="large">我要登录</mt-button>
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
    export default{
        data(){
            return {
                backgroundDiv:{
                    backgroundImage:'url('+require('../imgResource/bg.jpg')+')'
                }
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


        .header{
            margin-top: 100px;
            margin-bottom: 30px;
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