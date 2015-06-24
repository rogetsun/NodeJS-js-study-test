/**
 * Created by uv2sun on 15/5/4.
 */

var j = {id: 1, name: "litx"};

var str = 'id:id,name:name';
var regx = /:(\w+)/g;//不加括号，下面的function入参将没有第二个参数了
var str1 = str.replace(regx, function (match, p, idx, sourceStr) {
    console.log('*********************');
    console.log('arg0=%s,arg1=%s,arg2=%s,arg3=%s,arg4=%s', arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    console.log('*********************');
    return ':' + j[p];
});

console.log(str1);
console.log('########################');

var strM = "javascript is a good script language";

console.log(strM.replace(/(javascript)\s*(is)/g, "$1 $2 fun. it $2"));
//$1表示第一个匹配的括号内的内容match,$2.......
console.log('########################');

var str="Visit Microsoft!:id,:name";
var j = {id:1, name:'jack'};
console.log(str.replace(/:(\w+)/g,function(m,p){
    return j[p];
}));
