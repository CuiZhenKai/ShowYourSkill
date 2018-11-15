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
