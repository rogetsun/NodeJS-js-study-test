/**
 * Created by uv2sun on 15/5/4.
 */
var m = {
    a: function (o) {
        //console.log(this);
        console.log(o);
    }
};
(function () {
    var b = m.a;
    b.apply(null, ['xxxx','abcde']);
    console.log('###########################');
    b('bbb');
})();

var a = [1,2,3];
var b = [4,5,6];
Array.prototype.push.apply(a,b);
a.push(7,8);
console.log(a);

function Person(id,name){
    this.id = id;
    this.name = name;
    this.show = function () {
        console.log('id:%s, name:%s', id, name);
    }
}

function Student(id, name, grade){
    //Person.apply(this, arguments);
    Student.prototype = new Person(id, name);
    this.grade = grade;

}
var s = new Student(1,'litx', 4);
console.log(s);
console.log(Object.keys(s));