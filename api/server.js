var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.use(express.static(__dirname + "/../site/"));
app.use(express.bodyParser());



app.post('/api/users', function(req, res){
    console.log(req.body);

    res.json(
        {
         Data : [
          { FirstName : 'Vasa', LastName : 'Ivanov', Gender : true, Age : 15},
          { FirstName : 'Vasa9', LastName : 'Ivanov', Gender : true, Age : 15}
         ],
         Paging : {
          PageNumber : req.body.pageNumber, 
          TotalPagesCount : 10
         }
        }
    );
});

app.listen(8080, function(){
  console.log("Express server listening on port %d", '8080');
});