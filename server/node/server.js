var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');


    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
//Glassdoor endpoint
app.get('/glassdoor', function(req,res){

})
//CapTech website endpoint
app.get('/captech', function(req,res){

})
//Twitter endpoint
app.get('/twitter', function(req,res){

})
/*
app.get('/scrape', function(req, res){


	url = 'https://www.apple.com/itunes/charts/songs/';

	request(url, function(error, response, html){
		if(!error){

			var $ = cheerio.load(html);

			var songs = [];
			var json = {rank:"", art:"", name:"",artist:"" };
			$('.section grid').filter(function(){
				var data = $(this);
				var song = {};
			});

			$('#storyBody table').eq(1).find('.contentImageCenter').each(function(i, element){
		        var data = $(this);
		        var restaurant = {};
		        restaurant.logo = "http://www.styleweekly.com" + data.children().first().attr("src");
		        restaurant.name = data.children().first().text();            
                restaurant.burger = data.children().last().children().text();
                restaurant.address = data.text();

                restaurants.push(restaurant);
	        });
		}


        // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
        res.send([json])
        // send to browser
        res.send(restaurants);

	})
})
*/


var server = app.listen('8081');
console.log('Listening on port %d', server.address().port);
exports = module.exports = app;