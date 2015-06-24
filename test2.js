/**
 * Created by uv2sun on 15/5/28.
 */

var pro = {
    go: function () {
        console.log('litx running')
    }
};

var o = {
    id: 1, name: 'litx',
    say: function () {
        console.log(this.id + this.name);
    },
    __proto__: pro
};

var oo = {
    id: 2, name: 'litx2',
    __proto__: o
};


oo.say();
oo.go();
console.log(oo.__proto__.id);

