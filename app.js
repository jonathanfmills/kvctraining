var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	app = express(),
	router = express.Router();


var db = mongoose.connect('mongodb://localhost/bookAPI');
var Book = require('./models/bookModel');

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());


bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api', bookRouter);


app.use('/', function(req, res){
	res.send('welcome to my api');
});

app.listen(8000, function(){
	console.log('server listening on port 8080');
});

