var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function (req, res) {
  fs.readFile('index.html', function (err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
});

app.listen('8888', function (req, res) {
  console.log('server starting on 8888');
});
