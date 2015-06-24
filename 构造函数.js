/**
 * Created by uv2sun on 15/5/6.
 */
function fun() {
    console.log("good");
    var age = 1;
    this.name1 = 'Mr S.G';
    this.method = fun2;
}
fun.prototype.x = 'x';
function fun2() {
    console.log("this is the second method show");
}
function fun1() {
    var obj = new fun();
    console.log(obj.name1);
    console.log(obj.name);
    obj.method();
    console.log(obj.age);
}
fun1();
console.log('#############');
console.log(fun);
var foo02 = new Function(
    'var t = 100;' +
    'this.a = 200;' +
    'return t+this.a;'
);
console.log(foo02());
console.log('#############');
var funt = function (a) {
    //this.a = 'aaa';
    //return {x:'x'};
    //return 1;
    return true;
};
funt.prototype.x = 'x';
var a = new funt();
var b = new funt();
b.x = 'xb';
funt.prototype.x = 'xxxx';
console.log(a.x);
console.log(b.x);

console.log('---------------');

console.log(Function.prototype);

