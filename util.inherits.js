/**
 * Created by uv2sun on 15/6/16.
 */
var log = require('uvlog');
var Base = function () {
    this.name = 'base';
    this.sayHello = function () {
        console.log('hello ' + this.name);
    }
};

Base.prototype.show = function () {
    console.log('show ' + this.name);
};

var Sub = function () {
    this.name = 'sub';
};

var util = require('util');
util.inherits(Sub, Base);
var baseObj = new Base();
var subObj = new Sub();

log(baseObj);
baseObj.show();
baseObj.sayHello();
log('*******************');
log(subObj);
subObj.show();
log('*******************');
log(util.inherits.toString());
log('*******************');
log(Object.create.toString());