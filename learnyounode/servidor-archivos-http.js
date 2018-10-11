var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var fileName = process.argv[3];
var server;

server = http.createServer(function (request, response) {
    fs.createReadStream(fileName).pipe(response);
});
server.listen(port);