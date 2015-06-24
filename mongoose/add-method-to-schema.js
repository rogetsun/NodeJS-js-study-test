/**
 * Created by uv2sun on 15/6/10.
 */
/***
 * 这种方式可以给文档schema添加其他属性，但是并不会真的添加进数据库。
 * 相当于虚拟属性方法
 * @type {*|exports}
 */
var mongoose = require('mongoose');

var UserSchema = require('./user.schema.js');

UserSchema.methods.fullname = function () {
    return 'little ' + this.name + '-' + this.age;
};

UserSchema.method('getFullName', function () {
    return 'little ' + this.name + '-' + this.age;
});

var UserModel = mongoose.model('User', UserSchema);


var u = new UserModel({
    name: 'litx', age: 22
});

console.log(u.fullname());
console.log(u.name);
console.log(u.age);


console.log(u.getFullName());