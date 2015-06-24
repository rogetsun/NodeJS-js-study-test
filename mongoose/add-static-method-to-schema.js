/**
 * Created by uv2sun on 15/6/16.
 * Schema.statics 定义的方法测试结果只能在model调用。
 * Schema.methods 定义的方法在new Model后的实体调用。
 */

var log = require('uvlog');
var UserSchema = require('./user.schema');

UserSchema.statics.sfullname = function (str) {
    return 'static' + str;
};
UserSchema.static('sfullname2', function (str) {
    return 'static2 ' + str;
});

var UserModel = require('mongoose').model('User', UserSchema);

console.log(UserModel.sfullname(1));
log(UserModel.sfullname2(2));



var u = new UserModel({name: 'litx', age: '22'});
