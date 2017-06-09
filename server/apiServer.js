var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var data = [];

app.get('/data', function(req, res) {
    console.log("GET From SERVER");
    res.send(data);
});

app.post('/data', function(req, res) {
    var dataSegment = req.body;
    console.log(req.body);
    data.push(data);
    res.status(200).send("Successfully posted dataSegment");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
