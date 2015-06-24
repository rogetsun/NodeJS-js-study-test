/**
 * Created by uv2sun on 15/5/6.
 */
var log = console.log;
var o1 = {
    id:1
};
var o2 = {
    name:'22',
    __proto__:o1
};
log(o2.id);

function f1 (){

}
f1.prototype.x = 1;
f1.prototype.show = function () {
    console.log('f1'+this.x);
}
var f2 = function () {

}
f2.__proto__ = f1.prototype;

log(f2.show);
