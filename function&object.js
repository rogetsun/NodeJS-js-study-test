/**
 * Created by uv2sun on 15/5/6.
 */
var log = function () {
    console.log.apply(null, arguments);
};

log(Function instanceof Object);
log(Object instanceof Function);

log('--------------------');
log(Object.funt);
Object.prototype.funo = function funo() {
};
Function.prototype.funf = function funf() {
};
log(Object.funo);
log(Function.funo);
log(Object.funf);
log(Function.funf);

log('--------------------');
function test1 (){};
test1.prototype.test1Func = function test1Func(){};
log(test1.test1Func);
log(new test1().test1Func);
log(test1.funf);log(test1.funo);
log(new test1().__proto__.constructor);
log(test1.prototype.__proto__ === Function.prototype);
log(test1.prototype.__proto__ === Object.prototype);
log(test1.__proto__ === Function.prototype);
log(test1.__proto__ === Object.prototype);
log(Function.prototype.__proto__ === Object.prototype);

log('---------------------');
function f1(){};
console.log(f1.prototype) //f1{}
console.log(typeof f1.prototype) //Object
console.log(typeof Function.prototype) // Function，这个特殊
console.log(typeof Object.prototype) // Object
console.log(typeof Function.prototype.prototype) //undefined

log('---------------------');

var j = {a:'1'};
log(j.__proto__);
var jj = new Object(j);
log(jj);