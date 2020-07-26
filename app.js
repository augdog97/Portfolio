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
const portRouter = require('./routes/portfolio');
var app = express();



app.use('/', indexRouter);
app.use('/html-files/portfolio.html/', portRouter);
app.use('/html-files/time.html/', timeRouter);
app.use('/html-files/contact.html', contactRouter);

app.use(express.urlencoded({extended: true}));






app.get('*',(req,res) => { 
  res.sendStatus(404);
})



module.exports = app;
