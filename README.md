#show your skill


#本项目涉及的技术栈及其他概要:
    前端:Vue全家桶(Vue+Vue-router+Vue-resourece)+Mint UI组件
    后端:express+mongoose
    github存储
    全栈项目
    restful接口设计
    webApp形式
    github开源项目
#小结:
   ##学习点一:
      为单个的组件添加背景图片
      本项目中的解决办法是:
      组件的根元素节点:<div class="login" :style="">,这里的重点是为根元素的行间样式加上:style属性
      脚本中这样写:
                data(){
                    return {
                        backgroundDiv:{
                            backgroundImgae:'url('+require('图片相对于本组件的相对路径')+')';
                        }
                    }
                }
      样式中给组件设置的类加上定位
   ##学习点二:
      使用node框架express解决跨域的问题
      我们在通过借用app这个变量将express初始化之后,立刻写下下面的代码,解决跨域的问题
        `app.all("*",(req,res,next)=>{
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            next();
        });`
   ##学习点三:
      使用vue的时候我们会遇到post提交的问题,
      设置全局的请求根路径和设置post表单提交的时候数据组织格式是:
      `//设置请求的根路径
        Vue.http.options.root = 'http://192.168.43.218:9009';
        //全局设置post时候表单数据格式组织形式
        //application/x-www-from-urlencoded
        Vue.http.options.emulateJSON = true;`
   ##学习点四:
      对于下面这种类型的对象,看着像JSON,又不像JSON格式的对象
      var object = { 'Rname[]': [ 'form-control inputGroupSuccess1', 's' ],
                        'Rpwd[]': [ 'form-control inputGroupSuccess1', 's' ] }
      如果想要取到里面的"s",需要通过下面的这种形式
      object['Rname[]'][1]
   ##五:
     ###注册业务的实现逻辑
        获取用户输入的信息
        在已经存在的用户表中查看是否已经存在相同的
        如果存在,则返回给前台相应的错误代码
        如果不存在,则将用户的信息插入到用户表中
           注意:将用户的密码进行MD5多重加密
           将用户的信息写入session和cookie
   ##六
      let Username = this.username;
                let UserPwd = this.userpwd;
                this.$http.post("http://192.168.43.218:9009/dologin",{Username,UserPwd}).then(result=>{
                    // console.log("1");
            });
      上面的代码中,将数据传递给后台的时候,不要带着this.data,而是将要传递的数据写成变量,再传递
   ##七
      关于组件中的样式那一块,默认的时候,会加上scoped属性,表示私有模块,
      但是我们修改第三方的插件的时候,会造成干扰,我们可以适当的去除
   ##八
     我们实现登录功能的时候,此时我们需要将其存到localstorge,存入的代码我们从客户端就可以进行了,不用去在服务器端执行存入localstorge的操作了
   ##九
      关于vuex的学习:
      1.如果想要在某个组件中使用vuex中store中的值,在<template></template>中使用,而且必须是{{$store.state.xx}}的形式,
      两个大括号千万不能少
      2.如果想要控制state中的数据,我们一般使用mutations,但是这里需要注意的是,使用this.$store.commit('方法名'),
      而且必须是在脚本中写
      资料显示:
         mutations 中的方法是不分组件的 , 假如你在 dialog_stroe.js 文件中的定义了
         switch_dialog 方法 , 在其他文件中的一个 switch_dialog 方法 , 那么
         $store.commit('switch_dialog') 会执行所有的 switch_dialog 方法。
         mutations里的操作必须是同步的。
      3.多个 state 的操作 , 使用 mutations 会来触发会比较好维护 , 那么需要执行多个 mutations 就需要用 action 了;
      当前也是在脚本中写
      但是写法应该是this.$store.dispatch('方法名');
      4.很多时候 , $store.state.dialog.show 、$store.dispatch('switch_dialog') 这种写法又长又臭 , 很不方便 ,
      出现了方便的东西
      5.关于mapState等等函数,这里只列举这个函数的用法为例
      mapState在我看来就是就是将state进行重新的命名
      用法就是:
      在脚本中加入计算属性
      compouted:{
         ...mapState{
            show:state=>state.show
         }
      }
      在模板中我们直接写show就可以了
   ##十
      完结:
      实现了登录 注册 热门搜索 发布技能 查看技能 退出登录 切换账号
      后续:
      需要扩展:头像更换 搜索 资料更换 在线支付 第三方登录 在线联系
      
