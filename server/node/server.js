var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();

app.get('/scrape', function(req, res){
	console.log('Hello World');
})

var server = app.listen('8081');
console.log('Listening on port %d', server.address().port);
exports = module.exports = app;