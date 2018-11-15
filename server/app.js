//导入express基本插件
const express = require('express');

//初始化express
const app = express();

//导入C模块,用来处理具体的业务逻辑  controller.js
const controller = require('./controller/controller.js');
//导入M模块,用来处理具体的数据 db.js
const db = require('./models/db.js');
const User = require('./models/user.js');

//导入session插件
const session = require('express-session');
//安装,也就是使用session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));


//使用express解决跨域的问题
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// 测试
// app.use('/',(req,res,next)=>{
//     res.send("Hello");
//     next();
// });
//处理注册业务
app.use('/doregist',controller.doRegist);
//处理登录业务
app.use('/dologin',controller.doLogin);

//测试查找
app.use('/find',(req,res)=>{
    // User.remove({},(err,doc)=>{});
    User.find({},(err,docs)=>{
        res.send(docs);
    })
});

app.listen(9009,()=>{
    console.log("9090端口正在被监听");
});