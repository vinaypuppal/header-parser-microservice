var express = require('express');
var morgan = require('morgan');
var http = require('http');
var path = require('path');

var router = require('./router.js');

var app = express();

router(app);

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,'/public')));

var server = http.createServer(app);

var port = process.env.PORT || 3000;

server.listen(port,function(error){
	if(error) throw error;
	console.log("Server Started on port "+port);
})