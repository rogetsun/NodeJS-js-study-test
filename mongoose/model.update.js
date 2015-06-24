/**
 * Created by uv2sun on 15/6/11.
 */
var log = require('uvlog');
require('./db');
var UserModel = require('./user.model');

//UserModel.update({}, {$set:{age:4321}}).where({name:'litx111'}).exec(function (err, doc) {
//
//});

//UserModel.find(function () {
//    log(arguments[1]);
//});
UserModel.update({}, {$set:{age:123}}).setOptions({multi:1})
    .where('name', /li/)
    .exec(function (err, doc) {
        log(doc);
        UserModel.find(function (err, doc) {
            log(doc);
        })
    });