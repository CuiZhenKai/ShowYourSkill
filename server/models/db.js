//数据库的最基本的文件,这里实现数据库最基本的连接等等的业务逻辑

//导入mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.43.218:27017/SYS');

var db = mongoose.connection;
db.once('open',(callback)=>{
    console.log("数据库已经成功连接");
});

module.exports = db;