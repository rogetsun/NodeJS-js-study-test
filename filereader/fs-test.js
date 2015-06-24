/**
 * Created by uv2sun on 15/5/11.
 */

var pro = require('jsonfile');

var proper = new pro(__dirname+"/pro.json");
proper.init();
console.log(JSON.stringify(proper.getAll(), null, 4));

console.log(proper.value('key'));
proper.value('key', 'asdf');
console.log(proper.value('key'));
proper.save();
