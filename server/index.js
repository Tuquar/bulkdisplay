var express = require('express'),
	http = require('http'),
	app = express(),
	server = http.createServer(app),
	path = require('path'),
	Vue = require('vue'),
	port = 3421;


app.use(express.static(path.resolve(__dirname, 'dist')));


server.listen(port, function(){
	console.log('Server listening on port: ' + port);
});

server.get('/',function(req, res){
	res.send()
});
