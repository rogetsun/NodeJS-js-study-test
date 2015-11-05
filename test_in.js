/**
 * Created by uv2sun on 15/9/29.
 */

var arr = ['1', '2', '3', '4'];
var a = '2';
console.log(arr);
console.log(a in arr);
console.log(arr);
a = '3';
console.log(a in arr);


a = 1;

x = ((a == 1 && 'a=1') || (a == 2 && 'a=2') || (a == 3 && 'a=3'));
console.log(x);

