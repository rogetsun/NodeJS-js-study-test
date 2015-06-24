/**
 * Created by uv2sun on 15/6/10.
 */

var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name: {type: String, index: 1, required: 1, unique: true},
    age: {type: Number, required: true}
}, {
    collection:'user'
});

module.exports = UserSchema;
