/**
 * Created by hackywit on 2017/10/9.
 */
//关于webpack的主配置文件
let path = require('path');

module.exports = {
    build: {
        distRoot: path.resolve(__dirname,'../dist'),
    }
};