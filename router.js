

function route(pathname){
	console.log("About to route a request for "+pathname);
	for(var i =0; i<5000;i++){
		console.log("Hyper loop "+pathname);
	}
}

exports.route = route;