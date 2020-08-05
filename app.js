/* Imports */
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser');

/* Routers */
const indexRouter = require('./routes/index');
const contactRouter = require('./routes/contact');
const timeRouter = require('./routes/time');
const portRouter = require('./routes/portfolio');
const successRouter = require('./routes/success');

var app = express();

app.use(express.static( 'public'));

app.use('/', indexRouter);
app.use('/', portRouter);
app.use('/', timeRouter);
app.use('/', contactRouter);
app.use('/', successRouter);

app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('*',(req,res) => { 
  res.sendStatus(404);  
})



module.exports = app;