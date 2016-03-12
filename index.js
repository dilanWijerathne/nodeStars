var server = require("./server");
var router = require("./router");
var router = require("./requestHandlers");

var handle = {} 
	handle["/"] = requestHandlers.start; 
	handle["/start"] = requestHandlers.start;
	handle["/upload"] = requestHandlers.upload;

server.start(router.route,handle);
