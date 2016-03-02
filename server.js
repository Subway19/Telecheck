//Server-side file. Coded from scratch by Sumant Bagade
var express = require('express');

var app = express();


var port = process.env.PORT ||  7000;

var myRouter = express.Router();
//Creating a route
/*myRouter.route('/').get(function(req,res){

	res.render('showlist');

});

//Useful for creating 2degree routes
//Using a route
app.use('/showlist', myRouter ); */

//Middlewares
app.use(express.static('public'));
app.use(express.static('src/views'));
app.set('views', './src/views');				//for templating engine
app.set('view engine', 'ejs');

app.get('/', function (req,res) {
	res.render('index');
});

app.get('/home', function (req,res) {
	res.render('index');
});

app.get('/newreleases', function (req,res) {
	res.render('uc');
});


app.get('/showlist', function (req,res) {
	res.render('showlist');
});

app.get('/episodelist', function (req,res) {
	res.render('episodelist');
});


app.get('/upcoming', function (req,res) {
	res.render('uc');
});

app.get('/current', function (req,res) {
	res.render('uc');
});

app.get('/about', function (req,res) {
	res.render('about');
});
app.get('/contact', function (req,res) {
	res.render('contact');
});

app.get('/signin', function (req,res) {
	res.render('uc');
});






app.listen(port,function (err) {
	if(err)
	{
		console.log(err);
	}
	
	console.log('Running on ' + port);
});















