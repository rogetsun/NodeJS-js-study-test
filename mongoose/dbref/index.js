/**
 * Created by uv2sun on 15/6/18.
 */

var log = require('uvlog');
var mongoose = require('mongoose');
var Promise = require('mpromise');

var db = mongoose.connect('mongodb://localhost:2002/dbreftest');

mongoose.connection.on('open', function () {
    log("mongoose.connected;");
    //log(mongoose.connection);
});

mongoose.connection.on('close', function () {
    log("mongoose.connect close");
});

mongoose.connection.on('error', function () {
    log("mongoose.connected error");
    log(arguments);
});

var model = require('./model');
//log(model);

var UserModel = model.UserModel;
var GenderModel = model.GenderModel;
var DepartmentModel = model.DepartmentModel;

var gender = new GenderModel({gender_type: 1, gender_name: '男'});
var dept = new DepartmentModel({dept_name: '开发部'});
var dept1 = new DepartmentModel({dept_name: '财务部'});
gender.save();
dept.save();
dept1.save();
//var u = new UserModel({
//    name:'litx', age:12, gender:gender._id, dept:dept._id
//});
//u.save();


function to() {
    UserModel.findOne({name: 'litx'}).populate('gender dept')
        .exec(function (e, d) {
        })
        .then(function (u) {
            log('then1:' + arguments.length);
            return DepartmentModel.findOne({dept_name: '财务部'}).exec()
                .then(function (dept) {
                    log(dept);
                    return new Promise().fulfill(u, dept);
                })
        })
        .then(function (u, dept) {
            log('then2');
            log(u);
            log(dept);
            u.dept = dept._id;
            u.save();
        })
}


setTimeout(to, 1000);




