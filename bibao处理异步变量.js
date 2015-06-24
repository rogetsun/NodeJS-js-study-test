/**
 * Created by uv2sun on 15/4/29.
 */

var asynFn = function (cb) {

    setTimeout(cb, 1000, 'abc');
};

var color = {c: 'blue'};

var execFn = function (cl, a) {
    console.log((a ? a : '') + 'color is ' + cl);
};

asynFn(function () {
    execFn(color.c);
});

/**
 * 用JavaScript闭包可以“冻结”color的值
 * 对asyncFn的调用 被封装到了一个以color为参数的匿名函数里。
 * 这样你就可以马上执行这个匿名函数,把当前的color的值传给它。
 * 而color变成了匿名函数的参数,也就是这个匿名函数内部的本地变量,当 匿名函数外面的color值发生变化时,本地版的color不会受影响。
 *
 * */
(function (color) {
    asynFn(function () {
        execFn(color, 'bibao1 ');
    })
})(color.c);
/**
 * 注意：此种处理方式，对于传入对象引用依然无用
 */
(function (color) {
    asynFn(function () {
        execFn(color.c, 'bibao2 ');
    })
})(color);



color.c = 'green';