//导入路由模块
import VueRouter from 'vue-router'

//导入登陆组件
import Login from './Component/Login/login.vue';
//导入注册组件
import Register from './Component/Register/register.vue';
//导入热门技能组件
import HotSkill from './Component/hotSkill/hotSkill.vue';
//导入展示发布技能组件
import ShowSkill from './Component/showSkill/showSkill.vue';
//导入新闻资讯页面组件
import News from './Component/News/News.vue';
//个人中心组件
import Me from './Component/Me/Me.vue'

//创建路由对象
var router = new VueRouter({
    routes:[
       {
           //配置登陆页面的路由
           path:'/login',
           component:Login
       },
       {
           //配置注册页面的路由
           path:'/register',
           component:Register
       },
       {
           //配置首页
           path:'/',
           component:HotSkill
       },
       {
           //配置发布技能
           path:'/show',
           component:ShowSkill
       },
       {
           //配置新闻资讯
           path:'/news',
           component:News
       },
       {
           //配置个人中心
           path:'/me',
           component:Me
       }
    ]
});


//把路由对象暴露出去
export default router;
