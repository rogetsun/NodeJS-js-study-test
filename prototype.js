/**
 * Created by uv2sun on 15/5/6.
 */

var f1 = function (name) {
    this.n1 = name;
};
f1.prototype.show1 = function () {
    console.log('name:%s', this.n1)
};

var f2 = function (name, id) {
    this.id = id;
    f1.call(this, name);
};
f2.prototype = new f1;
f2.prototype.show2 = function () {
    console.log('id:%s', this.id)
};

var f3 = function (name, id, age) {
    this.age = age;
    f2.call(this, name, id);
};
f3.prototype = new f2;
f3.prototype.show3 = function () {
    console.log('age:%s', this.age);
};

var f = new f3('litx', '9', '99');
console.log(f);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~');
f.show1();
f.show2();
f.show3();
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(f2.__proto__);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(f instanceof f2);
console.log(f3.prototype.__proto__ === f2.prototype);