/**
 * Created by uv2sun on 15/5/7.
 */

console.log(__dirname);

var a = {
    pwd: __dirname,
    cwd: process.cwd()
};
console.log('cwd:' + process.cwd());
module.exports = a;