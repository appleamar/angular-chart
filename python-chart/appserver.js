var express = require("express");
var app = express();
var fs = require("fs");
var cors = require('cors')
app.use(cors())
var __dirname = 'M:/data';
app.listen(3000, () => {
 console.log("Server running on port 3000");
});
app.get('/test',cors(), function (req, res) {
   fs.readFile( __dirname + "/" + "test.json", 'utf8', function (err, data) {
      res.end(data);
   });
})
app.get('/train',cors(), function (req, res) {
       fs.readFile( __dirname + "/" + "train.json", 'utf8', function (err, data) {
          res.end(data);
       });
})
app.get('/forecast',cors(), function (req, res) {
           fs.readFile( __dirname + "/" + "forecast.json", 'utf8', function (err, data) {
              res.end(data);
           });
})