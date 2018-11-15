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
                            <input type="text" class="form-control inputGroupSuccess1" id="Rname" aria-describedby="inputGroupSuccess1Status">
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
                            <input type="password" class="form-control inputGroupSuccess1" id="Rpwd" aria-describedby="inputGroupSuccess1Status">
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
                            <input type="password" class="form-control inputGroupSuccess1" id="Rcpwd" aria-describedby="inputGroupSuccess1Status">
                        </div>
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="form-group has-success has-feedback">
                        <br>
                        <mt-switch class="color">我已经阅读并同意注册协议</mt-switch>
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <mt-button plain type="primary" size="large">我要注册</mt-button>
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
    export default{
        data(){
            return {
                backgroundDiv:{
                    backgroundImage:'url('+require('../imgResource/bg.jpg')+')'
                }
            }
        },
        created() {
            this.test();
        },
        methods:{
            test(){
                this.$http.get('http://192.168.43.218:9009/test').then(result=>{
                    console.log(result);
                })
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
        width: 140px;
        bottom: 0;
        text-align: center;
        left: 50%;
        margin-left: -70px;
        color: #38a2ff;
        text-decoration: none;
        font-size: 12px;

        .weight{
            color: white;
        }
    }
</style>