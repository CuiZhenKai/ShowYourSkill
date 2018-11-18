<template>
    
  <div class="show">


    <mt-header fixed title="个人中心"></mt-header>
    <div class="content-block-title">展示区</div>
      <div class="card facebook-card">
        <div class="card-header no-border">
          <div class="facebook-avatar"><img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="34" height="34"></div>
          <div class="facebook-name">{{username}}</div>
          <div class="facebook-date">个性签名</div>
        </div>
        <div class="card-content">
        <p>个人简介:
        你的个人简介
        </p>
        <p>心情卡片:</p>
        <img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="100%"></div>
        <div class="card-footer no-border">
          <a href="#" class="link">更换卡片</a>
          <a href="#" class="link">分享</a>
        </div>
    </div>
    <div class="content-block-title">个人资料区</div>
    <div class="card">
      <div class="card-content">
        <div class="list-block">
          <ul>
            <li>
              <a href="#" class="item-link item-content">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                  <div class="item-title">修改个人资料</div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="item-link item-content">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                  <div class="item-title">我的技能</div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="item-link item-content" @click="test">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                  <div class="item-title">我的收藏</div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="item-link item-content" @click="test">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                  <div class="item-title">我的关注</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>


    <div class="content-block-title">其他</div>
    <div class="card">
      <div class="card-content">
        <div class="list-block">
          <ul>
            <li>
              <a href="javascript:;" class="item-link item-content" @click="test">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                  <div class="item-title">消息提醒</div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="item-link item-content" @click="test">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                  <div class="item-title">安全中心</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-block-title">操作</div>
    <div class="card">
      <div class="card-content">
        <div class="list-block">
          <mt-button plain  size="large" @click="changeUser">更换账号</mt-button>
          <br/>
          <mt-button type="danger" size="large" @click="loginOut">退出登录</mt-button>
        </div>
      </div>
    </div>
  </div>
    
</template>


<script>
    import {Toast} from 'mint-ui';
    export default{
      data(){
        return {
          username:''
        }
      },
      created() {
        this.username = localStorage.getItem("username");
      },
      methods:{
        //退出登录
        loginOut(){
          // console.log("退出");
          localStorage.removeItem("username");
          localStorage.removeItem("isLogin");
          window.location.hash = "#/login";
        },
        //更换账号
        changeUser(){
          // console.log("更换账号");
          window.location.hash = "#/login";
        },
        //测试
        test(){
          Toast("对不起还未开通此功能模块");
        }
      }
    }
</script>


<style lang="less" scoped>
   
    .show{
      margin-top:14%;
      .mint-header{
        background:#26a2ff;
      }
    }
</style>