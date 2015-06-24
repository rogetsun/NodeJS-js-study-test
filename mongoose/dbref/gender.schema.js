/**
 * Created by uv2sun on 15/6/18.
 */
var mongoose = require('mongoose');

var GenderSchema = new mongoose.Schema({
    gender_type: {type: Number, unique: 1, required: 1},
    gender_name: {type: String, required: 1}
}, {collection: 's_gender_code'});
module.exports = GenderSchema;