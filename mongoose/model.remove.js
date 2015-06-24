/**
 * Created by uv2sun on 15/6/11.
 */

require('./db');
var UserModel = require('./user.model');
var log = require('uvlog');

UserModel.remove()
    //.where({name: 'litx111'})
    .exec(function (err, doc) {
        console.log(doc);
    });

UserModel.find(function (err, doc) {
    log(doc);
});