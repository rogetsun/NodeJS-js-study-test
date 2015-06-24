/**
 * Created by uv2sun on 15/6/10.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:2002/test');

module.exports = mongoose;