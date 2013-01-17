var express = require('express');
var app = express();

app.configure(function(){
	app.use(express.bodyParser());
	app.use(app.router);
	app.use(express.static(__dirname + '/../site'));
});

app.post('/api/users', function(req, res){
var result = {};

var result = {
	Data : [
		{ FirstName : 'Vasa', LastName : 'Ivanov', Gender : true, Age : 15},
		{ FirstName : 'Vasa1', LastName : 'Ivanov', Gender : true, Age : 15},
		{ FirstName : 'Vasa2', LastName : 'Ivanov', Gender : true, Age : 15},
		{ FirstName : 'Vasa3', LastName : 'Ivanov', Gender : true, Age : 15},
		{ FirstName : 'Vasa4', LastName : 'Ivanov', Gender : true, Age : 15},
		{ FirstName : 'Vasa5', LastName : 'Ivanov', Gender : true, Age : 15},
		{ FirstName : 'Vasa6', LastName : 'Ivanov', Gender : true, Age : 15},
		{ FirstName : 'Vasa7', LastName : 'Ivanov', Gender : true, Age : 15},
		{ FirstName : 'Vasa8', LastName : 'Ivanov', Gender : true, Age : 15},
		{ FirstName : 'Vasa9', LastName : 'Ivanov', Gender : true, Age : 15}
	],
	Paging : {
		PageNumber : 1, 
		TotalPagesCount : 10
	}
}

	res.json(200, result);
});

app.listen(8080, function(){
	console.log("Express server listening on port %d", '8080');
});
