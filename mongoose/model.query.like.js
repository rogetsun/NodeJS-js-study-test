/**
 * Created by uv2sun on 15/6/11.
 */
var log = require('uvlog');

require('./db');
var UserModel = require('./user.model');
new UserModel({name:'litx', age:123}).save(function (err, doc) {
    UserModel.find(function (err, doc) {
        log('**********');
        //log(doc);
        log('**********');
    });
});
UserModel.find().where('name', /t/).exec(function (err, doc) {
    log(doc.length);
    log(doc);
});