//这个文件主要是进行密码的MD5加密


//导入Node提供的crypto加密模块
const crypto = require('crypto');

module.exports = pwd=>{
    var md5 = crypto.createHash('md5');
    var password = md5.update(pwd).digest('base64');
    return password;
}