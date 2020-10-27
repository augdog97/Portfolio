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
const testRouter         =                require('./routes/test');

/* Portfolio Router */
const broadwayRouter     =               require('./routes/broadway');
const coffeeRouter       =               require('./routes/coffee');
const davieRouter        =               require('./routes/davie');
const travelRouter       =               require('./routes/travel');
/* User Account Routers */
const signinRouter       =               require('./routes/signin');
const signupRouter       =               require('./routes/signup');
const userRouter         =               require('./routes/logged-in');

/* Payment Router Imports */
const checkout                  = require('./routes/checkout');
const paymentSuccessRouter      = require('./routes/paymentSuccess');
const paymentCanceledRouter     = require('./routes/paymentCanceled');
const paymentSession            = require('./routes/session');


const app = express();

app.use(express.static('public'));

/* View Engine */
const ejs = require('ejs');
app.set('view engine', 'ejs');


/* Main App router uses */
app.use('/', indexRouter);
app.use('/', portRouter);
app.use('/', timeRouter);
app.use('/', contactRouter);
app.use('/', successRouter);
app.use('/', testRouter);

/* Portfolio router uses */
app.use('/', broadwayRouter);
app.use('/', coffeeRouter);
app.use('/', davieRouter); 
app.use('/', travelRouter);

/*User Account Router Uses */ 
   app.use('/', signinRouter);
  // app.use('/', signupRouter);
  // app.use('/', userRouter); 

/* Payment Routers */
app.use('/', checkout);
app.use('/', paymentSuccessRouter);
app.use('/', paymentCanceledRouter);
app.use('/', paymentSession);

app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('*',(req,res) => { 
  res.sendStatus(404);  
})



module.exports = app;