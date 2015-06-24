/**
 * Created by uv2sun on 15/6/18.
 */
var mongoose = require('mongoose');

var DepartmentSchema = new mongoose.Schema({
    dept_name: {type: String, unique: 1, required: 1}
}, {collection: 'd_dept_msg'});

module.exports = DepartmentSchema;
