//技能表

//导入mongoose
const mongoose  = require('mongoose');

//创建schema
let skillListSchema = new mongoose.Schema({
    'Sid':{
        type:Number
    },
    'Sname':{
        type:String,
        require:true
    },
    'SotherWay':{
        type:String,
        require:true
    },
    'SskillIntro':{
        type:String,
        require:true
    },
    'Ssalary':{
        type:String,
        require:true
    }
});


//建立索引
skillListSchema.index({"Sid":1});


//技能表模型
let SkillList = mongoose.model("SkillList",skillListSchema);

//导出
module.exports = SkillList;