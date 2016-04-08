var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();
ee.on('join', function () {
    console.log('welcome!');
    console.log(arguments[0]);
    console.log(arguments[1]);
});
setTimeout(function () {
    ee.emit('join', {a: 1}, 'you are pig!');
}, 2000);
