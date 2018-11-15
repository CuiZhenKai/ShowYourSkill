//用户表

//导入基本的mongoose插件
const mongoose = require('mongoose');

//创建用户表的基本结构,也就是新建一个schema
let UserSchema = new mongoose.Schema({
    'Uid':{
        type:Number
    },
    'Uname':{
        type:String,
        require:true
    },
    'Upwd':{
        type:String,
        require:true
    }
});

//建立索引
UserSchema.index({"Uid":1});

//建立用户表的模型,也就是新建一个表
let User = mongoose.model("User",UserSchema);

//到处学生模型
module.exports = User;