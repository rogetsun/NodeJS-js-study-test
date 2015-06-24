/**
 * Created by uv2sun on 15/6/17.
 */

var Father = function (name) {
    this.name = name;
    this.sayHello = function () {
        console.log("hello " + this.name);
    }
};

Father.prototype.show = function () {
    console.log('show ' + this.name);
};

var C1 = new Function();
C1.prototype = Object.create(Father.prototype, {
    age: {
        value: '1',
        writable: true, //是否可修改值
        enumerable: true, //是否可以枚举。不可枚举，打印对象看不见，但是可以取到值
        configurable: false //是否可被删除
    },
    constructor: {
        value: function (age) {
            this.age = age;
        },
        writable: true,
        enumerable: false,
        configurable: true
    }
});
console.log(C1);
console.log('age=' + C1.age);
C1.age = '22';
console.log('age=' + C1.age);
delete C1['age'];
console.log('age=' + C1.age);
var c = new C1('C2');
console.log(c);
