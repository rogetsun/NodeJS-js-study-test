/**
 * Created by uv2sun on 15/6/11.
 */

var log = require('uvlog');
require('./db');
var UserModel = require('./user.model');

var userArr = [];
for( var i = 0 ; i < 100 ; i ++ ){
    userArr[i] = {name:'litx'+i, age: i};
}
UserModel.create(userArr, function (err) {
    log(arguments[1] && arguments[1].length)
});

UserModel.aggregate()
    .match({name:/li/})
    .group({_id:"$min", name:'$first', age:'$max', age:'$min'})
    .exec(function () {
        log(arguments[1])
    });
