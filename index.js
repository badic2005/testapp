var express = require('express');
var app = express();

var favicon = require('serve-favicon')
var path = require('path')

require("dotenv").config();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.send('hello world');
});

const port = process.env.PORT  || '8000';
app.listen(port, function () {
    console.log('listen 8000')
})
