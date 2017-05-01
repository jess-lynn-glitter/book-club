//req express and other modules
var express = require('express'), 
	app =  express(),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	port = process.env.PORT || 3000;

var db = require('./models/book');

//configure cors for cross-origin requests
app.use(cors());

//configure bodyParser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//API endpoints
app.get('/', function(req, res){
	res.send("oh heeeyyyy");
});

//start server
app.listen(port, function(){
	console.log('server started on', port);
});