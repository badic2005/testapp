var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var favicon = require('serve-favicon')
var path = require('path')

var words = require('./api/words.route');

var app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api/words", words);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.send('hello world');
});

app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

exports = module.exports = app;

