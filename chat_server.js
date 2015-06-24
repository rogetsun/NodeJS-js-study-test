var events = require('events');
var net = require('net');
var util = require('util');
var channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};

console.log(channel);

channel.on('join', function (id, client) {
    console.log(id + ' join');
    this.clients[id] = client;
    this.subscriptions[id] = function (senderId, message) {
        if (id != senderId) {
            this.clients[id].write(senderId + ' say:' + message);
        }
    };
    this.on('broadcast', this.subscriptions[id]);
    console.log('********************');
    console.log(this.listeners('broadcast'));
    console.log('********************');
});
channel.on('leave', function (leaveID) {
    this.removeListener('broadcast', this.subscriptions[leaveID]);
    this.emit('broadcast', leaveID, 'i am leave!!');
});

var server = net.createServer(function (client) {
    var id = client.remotePort;
    channel.emit('join', id, client);
    //client.on('connect', function(){
    //	console.log('connect');
    //});
    client.on('data', function (data) {
        console.log('data');
        data = data.toString();
        channel.emit('broadcast', id, data);
    });
    client.on('close', function () {
        channel.emit('leave', id);
    });
});
server.listen(8888);
