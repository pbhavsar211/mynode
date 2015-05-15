express = require('express')
http = require('http')
bodyParser = require('body-parser');

app = express();
app.use(bodyParser.urlencoded({
	extended:true
}));
app.use(bodyParser.json());

// simple get request
app.get('/', function(req,res){
	console.log("received request");
	res.send("hello rest service !!!");
});

// get request with query string
app.get('/users', function(req,res){
	var name = req.param('name');
	console.log("received request : query string name = " + req.param('name'));
	res.send("hello " + name);
});

// get request with query string
app.get('/users/:user', function(req,res){
	var user = req.param('user');
	console.log("received request : url path name = " + req.param('user'));
	res.send("hello " + user);
});


// post request
app.post('/create', function(req,res){
	console.log("received post request body " + req.body.name);
	res.send('');
});

http.createServer(app).listen(1212, function(){
	console.log("server listening on port no. 1212");
});