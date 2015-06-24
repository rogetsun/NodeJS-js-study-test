/**
 * Created by uv2sun on 15/6/18.
 */


var DepartmentSchema = require('./department.schema');
var GenderSchema = require('./gender.schema');
var UserSchema = require('./user.schema');

var mongoose = require('mongoose');

exports.DepartmentModel = mongoose.model('department', DepartmentSchema);
exports.GenderModel = mongoose.model('gender', GenderSchema);
exports.UserModel = mongoose.model('user', UserSchema);

