var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();
ee.on('join', function(){
	console.log('welcome!');
});
setTimeout(function(){ee.emit('join');},2000);
