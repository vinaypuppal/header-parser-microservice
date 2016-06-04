module.exports = function(req){
	var ip = req.ip.split(":").pop()+'\n';
	var language = req.acceptsLanguages().toString().split(',')[0]+'\n';
	var software = req.headers['user-agent'].split('(')[1].split(')')[0];
	return{
		ipaddress:ip,
		language:language,
		software:software
	}
}