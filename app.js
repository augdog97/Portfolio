var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const contactRouter = require('./routes/contact');
const timeRouter = require('./routes/time');

var app = express();



app.use('/contact.html/', contactRouter);
app.use('/', indexRouter);
app.use('/time.html/', timeRouter);



app.use(express.urlencoded({extended: true}));






module.exports = app;
