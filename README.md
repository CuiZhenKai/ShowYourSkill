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
