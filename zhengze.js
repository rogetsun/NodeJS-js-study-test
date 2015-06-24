/**
 * Created by uv2sun on 15/5/4.
 */
var path = '/p1/key/:id';
var p2 = path.replace(/\//g,'\\/').replace(/:(\w+)/g, '([^\\/]+)');
console.log(p2);
var reg = new RegExp('^'+p2+'$');
console.log(reg);
var t = '/p1/key/3'.match(reg);
console.log(t);

