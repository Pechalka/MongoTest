var express = require('express');
// var mongoose = require('mongoose');

var app = express();

// app.use(express.static(__dirname + "/../site/"));
// app.use(express.bodyParser());


app.get('/image', function(req, res){
  res.header('Content-Type', 'image/png');
  var gm = require('gm');
  var resizeX = 343;
  var resizeY = 257;

  gm('/home/andrew/projects/MongoTest/api/img/glyphicons-halflings.png')
  .flip()
  .rotate('green', -25)
  .edge(3)
  .resize(resizeX, resizeY)
  .write('/home/andrew/projects/MongoTest/api/img/test.png', function (err) {
    if (err) console.log(err);
  });
});
// app.post('/api/users', function(req, res){
//     console.log(req.body);

//     res.json(
//         {
//          Data : [
//           { FirstName : 'Vasa', LastName : 'Ivanov', Gender : true, Age : 15},
//           { FirstName : 'Vasa9', LastName : 'Ivanov', Gender : true, Age : 15}
//          ],
//          Paging : {
//           PageNumber : req.body.pageNumber, 
//           TotalPagesCount : 10
//          }
//         }
//     );
// });

app.get('/api/menu', function(req, res){
  res.json([
        { text : 'Users', url :'#Users'}, 
        { text : 'Photos', url :'#Photos'}
      ]);
});

app.listen(8080, function(){
  console.log("Express server listening on port %d", '8080');
});
