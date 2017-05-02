//req express and other modules
var express = require('express'), 
	app =  express(),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	port = process.env.PORT || 3000;
	methodOverride = require('method-override');

var db = require('./models');

//configure cors for cross-origin requests
app.use(cors());

//configure bodyParser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// serve static files in public
app.use(express.static('public'));

//API endpoints
app.get('/', function(req, res){
	res.sendFile(__dirname + "/public/index.html");
});

//get all books
app.get('/api/books', function(req, res){
	db.Book.find(function(err, data){
		res.json(data);
	});
});

//post a book
app.post('/api/books', function(req, res){
	console.log('posting');
	var book = new db.Book(req.body);

	book.save(function(error){
		if(error) res.json({message: 'could not create book bc' + error});

		res.json({book: book});
	});
});

//get one book
app.get('/api/books/:id', function (req, res){
	db.Book.findOne({_id: req.params.id}, function(err, data){
		res.json(data);
	});
});

//start server
app.listen(port, function(){
	console.log('server started on', port);
});