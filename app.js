var ex = require('express');
var app = ex();
app.get('/', function(req,res){
	res.send('hello litx ');
});
app.get('/litx', function(req,res){
res.send('pig litx');
});
app.listen(2222);
