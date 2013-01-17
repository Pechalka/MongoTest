var express = require('express');
var app = express();

app.configure(function(){
	app.use(express.bodyParser());
	app.use(app.router);
	app.use(express.static(__dirname + '/../site'));
});



app.listen(8080, function(){
	console.log("Express server listening on port %d", '8080');
});
