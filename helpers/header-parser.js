module.exports = function(req){
	var ip = req.headers['x-forwarded-for'] || 
     		req.connection.remoteAddress || 
     		req.socket.remoteAddress ||
     		req.connection.socket.remoteAddress;
	ip = ip.split(":").pop();
	var language = req.acceptsLanguages().toString().split(',')[0];
	var software = req.headers['user-agent'].split('(')[1].split(')')[0];
	return{
		ipaddress:ip,
		language:language,
		operatingSystem:software
	}
}