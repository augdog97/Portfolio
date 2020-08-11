/* Imports */
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser');

/* Main App Routers */
const indexRouter        =                require('./routes/index');
const contactRouter      =                require('./routes/contact');
const timeRouter         =                require('./routes/time');
const portRouter         =                require('./routes/portfolio');
const successRouter      =                require('./routes/success');
/* Portfolio Router */
const broadwayRouter     =               require('./routes/broadway');
const choreRouter        =               require('./routes/chore');
const coffeeRouter       =               require('./routes/coffee');
const davieRouter        =               require('./routes/davie');
const storyRouter        =               require('./routes/story');
const surveyRouter       =               require('./routes/survey');
const teaRouter          =               require('./routes/tea');
const todoRouter         =               require('./routes/todo');
const travelRouter       =               require('./routes/travel');
const wineRotuer         =               require('./routes/wine');



var app = express();

app.use(express.static( 'public'));


/* Main App router uses */
app.use('/', indexRouter);
app.use('/', portRouter);
app.use('/', timeRouter);
app.use('/', contactRouter);
app.use('/', successRouter);

/* Portfolio router uses */
app.use('/', broadwayRouter);
app.use('/', choreRouter);
app.use('/', coffeeRouter);
app.use('/', davieRouter);
//app.use('/'. storyRouter);
app.use('/', surveyRouter);
app.use('/', teaRouter);
app.use('/', todoRouter);
app.use('/', travelRouter);
app.use('/', wineRotuer);


app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('*',(req,res) => { 
  res.sendStatus(404);  
})



module.exports = app;