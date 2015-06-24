/**
 * Created by uv2sun on 15/6/10.
 */

var log = require('uvlog');
var mongoose = require('./db');

require('./user.model');
var UserModel = mongoose.model('User');


var u = new UserModel({
    name: 'litx2', age: 32
});


u.save(function (err, u) {
    log('u:' + u)
});


var user1 = {name: 'litx111', age: 25};
var user2 = {name: 'litx333', age: 333};
UserModel.create([user1, user2], function (err) {
    log(arguments.length);
    for (var i = 1; i < arguments.length; i++) {
        log("argu:"+arguments[i]);
    }
});


//UserModel.find(function (err, doc) {
//    for (var i in doc) {
//        doc[i].age = 4321;
//        doc[i].save();
//    }
//});
//UserModel.find().exec(function (err, docs) {
//    log(docs);
//});
//
//UserModel.find({}).where({name: 'litx111'}).exec(function (err, doc) {
//    log(doc);
//});
//UserModel.find().where('name', 'litx111').exec(function (err, docs) {
//    log(docs[0] && docs[0].isNew);
//});

UserModel.find().where({name:/lit[a-z]/}).exec(function (err, doc) {
    log(doc);
});