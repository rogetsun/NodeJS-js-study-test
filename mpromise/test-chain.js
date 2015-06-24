/**
 * Created by uv2sun on 15/6/18.
 */
var promise = require('mpromise');
var log = require('uvlog');

var p = new promise;

log(p);
var p1 = new promise;
p1.fulfill('p1');

p.chain(p1);
p.fulfill(1).then(function () {
    log(arguments);
});
log(p);
