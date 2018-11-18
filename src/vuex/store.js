import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

//引入某个子模块对象
import dialog_store from '../Component/dialog_store/dialog_store.js';


//构建核心仓库
const store = new Vuex.Store({
    //定义状态
    state:{
        // userName:"test",
        // isLogin:"",
        show:false
    },
    mutations:{
        switch_dialog(state){//这里的state代表的是上面的state
            state.show = state.show?false:true;
        }
    },
    actions:{
        switch_dialog1(context){
            context.commit('switch_dialog');
            //也可以触发其他的方法
        }
    }
    // mutations:{
    //     newUser(state,msg){
    //         state.userName = msg;
    //     },
    //     isLogin(state,msg){
    //         state.isLogin = msg;
    //         localStorage.setItem("isLogin",msg);
    //     }
    // }
    // modules:{
    //     dialog:dialog_store
    // }
});

export default store;