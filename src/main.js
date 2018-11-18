//入口文件
// console.log("项目运行成功");

//导入Vue的基本插件
import Vue from 'vue';
//导入路由所需要的插件
import VueRouter from 'vue-router';
//安装路由
Vue.use(VueRouter);

//导入vuex
import Vuex from 'vuex';
//导入仓库
import store from './vuex/store.js';
//安装vuex
Vue.use(Vuex);


//导入请求数据所需要的插件
import VueResource from 'vue-resource';
//安装
Vue.use(VueResource);
//设置请求的根路径
Vue.http.options.root = 'http://192.168.43.218:9009';
//全局设置post时候表单数据格式组织形式
//application/x-www-from-urlencoded
Vue.http.options.emulateJSON = true;

//导入mintUi组件
import MintUI from 'mint-ui'
//安装mint-ui
Vue.use(MintUI);
import 'mint-ui/lib/style.css'

//导入bootstrap样式组件库
import 'bootstrap/dist/css/bootstrap.min.css';
//导入根目录样式库,取消一些多余的操作
import './Component/indexCss/index.css';
// import './bg.jpg'

// 导入 MUI 的样式
// import './lib/mui/css/mui.min.css'


//导入router.js模块
import router from './router.js';

//导入App根组件
import app from './app.vue';

//实例化一个app组件
var vm = new Vue({
    el:'#app',
    //渲染app
    render:c=>c(app),
    //使用store
    store,
    //将路由挂载到页面上
    router,
    // created() {
    //     if(localStorage.getItem("isLogin")===null){
    //         localStorage.setItem("isLogin",'');
    //     }
    //     this.$store.state.isLogin = localStorage.getItem('isLogin');
    // },
})