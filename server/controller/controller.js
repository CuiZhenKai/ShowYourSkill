
//导入formidable插件,formadible是专门用来处理post请求的
const formidable = require('formidable');
//导入基本的数据模型
const db = require('../models/db.js');
//导入我们自定义的md5加载模块
const md5 = require('../models/md5.js');
//导入用户表
const User = require('../models/user.js');
//导入技能表
const SkillList = require('../models/skillList.js');
//导入内置的http和path模块模块
const http = require('http'),
      path = require('path');


//实现注册业务 post /doregist
exports.doRegist = (req,res,next)=>{
    // console.log("注册业务");
    //初始化formidable
    let form = new formidable.IncomingForm();
    form.parse(req,(err,fields,files)=>{
        // console.log(fields["Rname[]"][1],fields["Rpwd[]"][1]);
        //得到用户名
        let Uname = fields["Rname[]"][1];
        //得到密码
        let Upwd = fields["Rpwd[]"][1];

        //查询
        User.find({"Uname":Uname},(err,result)=>{
            if(err){
                res.send({"code":3});  //服务器未知错误
                return;
            }
            // console.log(result.length);
            if(result.length!=0){
                res.send({"code":-1});  //用户名已经被占用
                return;
            }

            //没有相同的人
            //执行密码的MD5加密
            Upwd = md5(md5(Upwd)+"PGMVP");

            //写入用户表中
            //用户数据
            let arr = [{
                "Uname":Uname,
                "Upwd":Upwd
            }];
            User.insertMany(arr,(err,docs)=>{
                if(err){
                    res.send({"code":3});  //服务器未知错误
                    return;
                }

                //写入session
                req.session.login = "1";
                req.session.Uname = Uname;

                //写入localStorage
                // localStorage.setItem("login",1);
                // localStorage.setItem("Uname",Uname);

                res.send({"code":1});  //注册成功

                next();
            });
        });
    });
    // next();
}

//实现登录业务 post /dologin
exports.doLogin = (req,res,next)=>{
    let form = new formidable.IncomingForm();
    form.parse(req,(err,fields,files)=>{
        if(err){
            console.log(err);
        }
        // console.log(fields);
        Username = fields.Username;
        // Upwd = md5(md5(Upwd)+"PGMVP");
        //MD5反向解密返回
        UserPwd = md5(md5(fields.UserPwd)+"PGMVP");
        // console.log(Username,UserPwd);
        //数据库查询
        User.findOne({"Uname":Username,"Upwd":UserPwd},(err,result)=>{
            //错误优先
            if(err){
                res.send({"code":3});  //服务器未知错误
                return;
            }
            // console.log(result);
            if(!result){
                //错误
                res.send({"code":-1});
            }else{
                // localStorage.setItem("login",1);
                // localStorage.setItem("name",Username);
                //正确
                res.send({"code":1});
            }
        });
    });
}


//实现发布技能业务
exports.saveSkill = (req,res,next)=>{
    let form = new formidable.IncomingForm();
    form.parse(req,(err,fields,files)=>{
        // console.log(fields);
        let {otherWay,skillIntro,salary,username} = fields;
        // console.log(otherWay,username);
        let arr = [{
            "Sname":username,
            "SotherWay":otherWay,
            "SskillIntro":skillIntro,
            "Ssalary":salary
        }];
        //插入技能表中
        SkillList.insertMany(arr,(err,docs)=>{
            if(err){
                //服务器端位置错误
                res.send({"code":3});
                return;
            }
            // console.log([{otherWay,skillIntro,salary,username}]);
            //发布技能成功
            res.send({"code":1});


            next();
        });
    });
}

//实现获取技能列表任务
exports.getSkill = (req,res,next)=>{
    // console.log("1");
    SkillList.find({},(err,docs)=>{
        if(err){
            //后台服务器错误,获取数据失败
            res.send({"code":3});
            return;
        }
        res.send({"code":1,data:docs});
    });
};