

//导入express基本插件
const express = require('express');

//初始化express
const app = express();

//使用express解决跨域的问题
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/',(req,res)=>{
    res.send("Hello");
});

app.use('/test',(req,res)=>{
    res.json({code:0,data:1});
});

app.listen(9009,()=>{
    console.log("9090端口正在被监听");
});