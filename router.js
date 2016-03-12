

function route(pathname){
	console.log("About to route a request for "+pathname);
	for(var i =1; i>0;i++){
		console.log(i+" : Hyper loop "+pathname);
	}
}

exports.route = route;