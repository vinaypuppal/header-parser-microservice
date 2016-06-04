var headerParser = require('./helpers/header-parser');
var path = require("path");
module.exports =function(app){
	app.get('/',function(req,res){
		res.sendFile(path.join(__dirname,'/public/index.html'));
	});
	app.get('/api/whoami',function(req,res){
		var results = headerParser(req);
		res.send(results);
	});
}