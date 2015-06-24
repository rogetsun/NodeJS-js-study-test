/**
 * Created by uv2sun on 15/6/18.
 */

var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
    name: {type: String, unique: 1, required: 1},
    age: {type: Number},
    gender: {type:mongoose.Schema.Types.ObjectId},
    dept: {type: mongoose.Schema.Types.ObjectId, ref: 'department'}
}, {
    collection: 'd_user_msg'
});


module.exports = UserSchema;
