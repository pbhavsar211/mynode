var http = require('http');

server = http.createServer(function(req,res){
	console.log('request received...');
	res.write('hello World from http server of node !!!');
	res.end(); // do not call close method...
}).listen(1212);