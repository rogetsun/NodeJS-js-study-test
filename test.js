/**
 * Created by uv2sun on 15/5/28.
 */
var Fun1 = function (id, name) {
    this.id = id;
    this.name = name;
    this.show = function () {
        console.log('Fun1.show:'+this.id+this.name);
    }
};
Fun1.prototype.say = function () {
    console.log('Fun1 say:'+this.id+this.name);
};



var f11 = new Fun1(1, 'litx1');

Fun1.prototype.say = function () {
    console.log('Fun1 resay:'+this.id+this.name);
};
f11.show = function () {
    console.log('Fun1 reshow:'+this.id+this.name);
};

var f12 = new Fun1(2, 'litx2');

f11.say();
f11.show();
f12.say();
f12.show();

console.log('------------------------------');


var Fun2 = function (id, name, age) {
    //Fun1.call(this, id, name);
    Fun1.apply(this, arguments);
    this.age = age;
};

Fun2.prototype= new Fun1();

var f2 = new Fun2(3, '999', 22);

f2.show();
f2.say();