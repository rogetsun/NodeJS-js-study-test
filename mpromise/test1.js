/**
 * Created by uv2sun on 15/6/18.
 */


var Promise = require('mpromise');
var log = require('uvlog');

var p = new Promise;

p.then(function (a) {
    log(arguments);
    //var tp = new Promise;
    //tp = tp.fulfill('x').then(function (a) {
    //    return {'0':1, '1':a};
    //});
    //return tp;
    return 'ok'
}).then(function (a, b, c) {
    log('then2');
    log(arguments);
    log(a);
});

p.fulfill(1,2,3,4,5,6,7);
//
//var d = $q.defer();
//d.resolve('ret value');
//return d.promise;
//
//pro .then(function (data) {
//
//});