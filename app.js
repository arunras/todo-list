//import express module
var express = require('express');
var todoController = require('./controllers/todoController');

// object app as an express module
var app = express();

//setup template engine using ejs
app.set('view engine', 'ejs');

//static files for the path of assets
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log('You are listening to port 3000');

