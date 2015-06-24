/**
 * Created by uv2sun on 15/5/5.
 * 继承主要是两种方式，一是冒充（分手工冒充和apply/call两种），二是原型prototype；
 * 冒充方式会将父类构造器中this的属性继承下来，但是不会继承原型prototype指定的属性。
 * 原型prototype构造器里给this指定的属性，如果在给之类继承指定prototype时，指定构造器入参可以继承，如果未指定，则未继承。
 *      因为子类的原型其实就是父类的new出来的对象。
 * 注意：console.log()打印对象时，不会打印对象prototype指定的属性。但是指定打印该属性却可以。
 */
console.log('####################冒充###################');

/**
 * 第一种继承方式:对象冒充
 * this.m = Class1;
 * this.m(id,name);
 * delete this.m;
 * */
var Class1 = function (id, name) {
    this.id = id;
    this.name = name;
    this.show = function () {
        console.log(this.id, this.name);
    }
};

Class1.prototype.alert = function () {
    console.log(Object.keys(this));
};

var Class2 = function (id, name, grade) {
    this.m = Class1;
    this.m(id, name);
    delete this.m;
    this.grade = grade;
};

var b = new Class2(2, 'songyw', 22);
var a = new Class1(1, 'litx');
console.log(a);
console.log(b);
a.show();
b.show();

/**
 * 第二种继承方式:apply/call,是与经典的对象冒充方法最相似的方法
 * Class1.apply(this, arguments);
 * */
console.log('###################apply/call####################');
var Class3 = function (id, name, grage, sex) {
    //Class1.apply(this, [id, name]);
    Class1.call(this, id, name);
    this.grage = grage;
    this.sex = sex;
};

var c = new Class3(3, 'class3', 33, 0);
console.log(c);
c.show();

/**
 * 前两种冒充和apply/call冒充的实现均不会把原型链里面的方法继承下来。因为他只是把父类的this指向了子类。
 * */

/**
 * 第三种继承方式：原型链prototype
 * 这种方式，构造器带任何参数，内部赋值给this，都不会继承给子类;只会继承外部通过prototype给定的。
 * 除非在定义之类原型时，将父类构造器的参数给定。
 * */
console.log('####################prototype###################');
function ClassA (id){
    this.id = id;
}
ClassA.prototype.show = function () {
    console.log('id:%s,name:%s,age:%s',this.id,this.name,this.age);
};
ClassA.prototype.name = "";

function ClassB (age){
    this.age = age;
}
ClassB.prototype = new ClassA(1);

var ca = new ClassA(9);
ca.name = 'classa';
var cb = new ClassB(99);
var cc = new ClassB(30);
cc.id = 301;
ca.show();cb.show();cc.show();

/**
 * 混合方式：这种继承方式使用构造函数定义类，并未使用任何原型。
 *      对象冒充的主要问题是必须使用构造函数方式（如上一章中学到的），这不是最好的选择。
 *      不过如果使用原型链，就无法使用带参构造函数了。开发者该如何选择呢？
 *      答案很简单，两者都用。
 * */
console.log('####################混合###################');
function ClassHH (id, name, age, grade){
    Class1.call(this, id, name);
    this.age = age;
    this.grade = grade;
}

ClassHH.prototype = new Class1();
ClassHH.prototype.x = 'x';

var hh = new ClassHH(1, 'litx', 31, 99);
console.log(hh);
console.log(hh.x);
hh.show();
hh.alert();
