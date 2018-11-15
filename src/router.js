//导入路由模块
import VueRouter from 'vue-router'

//导入登陆组件
import Login from './Component/Login/login.vue';
//导入注册组件
import Register from './Component/Register/register.vue';

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
       }
    ]
});


//把路由对象暴露出去
export default router;
