/**
 * Created by uv2sun on 15/6/10.
 */

var mongoose = require('mongoose');
var UserSchema = require('./user.schema');

UserSchema.methods.fullname = function () {
    return this.name+'-'+this.age;
};

var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;

