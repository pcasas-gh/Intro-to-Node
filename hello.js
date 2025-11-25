var http = require('http');
var fs = require('fs'); 
var url = require('url');

http.createServer(function (req, res) {

	var q = url.parse(req.url, true);
	var fileName = "."  + q.pathname;

	if(fileName == './') {fileName = './index';}

	fileName = fileName + ".html";
	console.log(fileName);

	fs.readFile(fileName, function(err, data) {

		if(err){
			res.writeHead(404, {'Content-Type': 'text/hmtl'});
			return res.end("404 Not Found");
		}

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
	});
	
	
	//var q = url.parse(req.url, true).query;
	//var dates = q.year + " " + q.month;

}).listen(8080);

console.log("Server Listening on port 8080...");