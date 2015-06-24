var person = function (name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.sing = function () {
        console.log('sing');
    }
};
//new 一个ladygaga
var gaga = new person('ladygaga', 26, 'girl');
//给嘎嘎发放一个不可枚举的身份证
Object.defineProperty(gaga, 'id', {
    value: '1234567890',
    enumerable: false
});
//查看gaga的个人信息
var arr = Object.getOwnPropertyNames(gaga);
console.log(arr);
//output: name,age,sex,sing,id  document.write('</br>');

//注意和getOwnPropertyNames的区别，不可枚举的id没有输出
var arr1 = Object.keys(gaga);
console.log(arr1); //output: name,age,sex,sing }
console.log('*****************************************');
console.log(gaga.id);
console.log('*****************************************');
console.log(Object.keys({id:1,name:'fdsa'}));