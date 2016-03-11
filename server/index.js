var http = require('http'),
	koa = require('koa'),
	serve = require('koa-static'),
	app = koa(),
	//server = http.createServer(app),
	path = require('path'),
	Vue = require('vue'),
	port = 3421;



app.use(serve(__dirname +'client/views'));

app.use(function* (){
	this.body = 'Hello World'
});

app.listen(port, function(){
	console.log('Server listening on port: ' + port);
});
