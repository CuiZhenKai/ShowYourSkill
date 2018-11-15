<template>
    <div class="login" id="login" :style="backgroundDiv">
        <div class="row">
            <div class="col-md-1 header">
               <div class="col-md-1"></div>
               <div class="col-md-10 logo">
                   <span class="glyphicon glyphicon-pencil"></span>
                   欢迎注册!
               </div>
               <div class="col-md-1"></div>
            </div>
            <div class="col-md-1">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="form-group has-success has-feedback">
                        <label class="control-label" for="Rname"></label>
                        <div class="input-group">
                            <span class="input-group-addon">用户名</span>
                            <input type="text" class="form-control inputGroupSuccess1" id="Rname" aria-describedby="inputGroupSuccess1Status" v-model="Rname" style="color:white;">
                        </div>
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="form-group has-success has-feedback">
                        <label class="control-label" for="Rpwd"></label>
                        <div class="input-group">
                            <span class="input-group-addon">密码</span>
                            <input type="password" class="form-control inputGroupSuccess1" id="Rpwd" aria-describedby="inputGroupSuccess1Status" v-model="Rpwd" style="color:white;">
                        </div>
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="form-group has-success has-feedback">
                        <label class="control-label" for="Rcpwd"></label>
                        <div class="input-group">
                            <span class="input-group-addon">确认密码</span>
                            <input type="password" class="form-control inputGroupSuccess1" id="Rcpwd" aria-describedby="inputGroupSuccess1Status" v-model="Rcpwd" style="color:white;">
                        </div>
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="form-group has-success has-feedback">
                        <br>
                        <mt-switch class="color" v-model="value">我已经阅读并同意注册协议</mt-switch>
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <mt-button plain type="primary" size="large" @click="goToRegister()">我要注册</mt-button>
                </div>
                <div class="col-md-1"></div>
            </div>
            <div class="col-md-1 bottom">
                <div class="col-md-12">
                    已注册,请<router-link to="/login" class="weight">登录
                    </router-link>
            </div>
            </div>
        </div>
    </div>
</template>


<script>
    import { Toast } from 'mint-ui';
    export default{
        data(){
            return {
                backgroundDiv:{
                    backgroundImage:'url('+require('../imgResource/heart.jpg')+')'
                },
                //注册名
                Rname:'',
                //密码
                Rpwd:'',
                //确认密码
                Rcpwd:'',
                //是否同意注册协议
                value:true,
            }
        },
        created() {
           
        },
        methods:{
            //去注册
            goToRegister(){
                // console.log(window.location);
                if(!Rname.value||!Rpwd.value||!Rcpwd.value){
                    Toast({
                        message: '请把四个选项都填完',
                        iconClass: 'glyphicon glyphicon-edit',
                        duration:1350
                    });
                    return;
                }
                if(Rpwd.value!==Rcpwd.value){
                    Toast({
                        message: '两次密码不一致',
                        iconClass: 'glyphicon glyphicon-lock',
                        duration:1350
                    });
                    return;
                }
                //向后台发送请求,将用户提交的注册数据发送到后台
                this.$http.post("http://192.168.43.218:9009/doregist",{Rname,Rpwd}).then(result=>{
                    // console.log(result.body.code);
                    let code = result.body.code;
                    switch(code){
                        case -1:
                            Toast({
                                message: '用户名重复',
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
                                message: '注册成功,SYS欢迎您',
                                iconClass: 'glyphicon glyphicon-hand-up',
                                duration:1350
                            });
                            //注册成功,跳转到登录页
                            window.location.hash = "#/login";
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
            margin-top: 30px;
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
    .color{
        color: white;
    }
    .bottom{
        position: absolute;
        width: 180px;
        bottom: 0;
        text-align: center;
        left: 50%;
        margin-left: -90px;
        color: #38a2ff;
        text-decoration: none;
        font-size: 15px;

        .weight{
            color: white;
        }
    }
</style>