var express = require('express');
const contact = express.Router();
var path = require('path');
const bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');
require('dotenv').config();

/* 1. using the body parser to get JSOn
   */ 
contact.use(bodyParser.json() );


/* 
1. Making a GET request and sending the Contact HTMl file
2. using next to run the next set of middleware
*/

contact.get('/contact',  (req,res,next) => {
  res.render('contact');
})


/*
1. making a POST request to the contact route.
2. transporter: part of nodemailer to set up sending an email. 
3. Auth: Creds for Gmail 
4. Verifying that the SMTP server is running correctly with Transporter.verify
5. Sending the Email using req.body(parsed json)
6. Error logging 
*/

contact.post('/contact', (req,res,next) => {

   /* var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'augustshah@02pilot.com',
      pass: ''
    }
  }); */
  const transporter = nodemailer.createTransport(
    nodemailerSendgrid({
      apiKey: process.env.sengrid_api
    })
  );


  transporter
    .sendMail({
      from: 'augustshah@02pilot.com',
      to: 'augustshah@02pilot.com',
      subject: `${req.body.name}: Quote`,
      html: `Contact Email: ${req.body.email}
      <br>
      ${ req.body.message }`
    })
    .then(([res]) => {
      console.log('Message delivered with code %s %s', res.statusCode, res.statusMessage);
    })
    .catch(err => {
      console.log('Errors occurred, failed to deliver message');

      if (err.response && err.response.body && err.response.body.errors) {
        err.response.body.errors.forEach(error => console.log('%s: %s', error.field, error.message));
      } else {
        console.log(err);
      }
    });





/*
  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  var mailOptions = {
    from: ``,
    to: 'augustshah@02pilot.com',
    subject: `${req.body.name}: Quote`,
    text: `Contact Email: ${req.body.email}
    ${req.body.message}`
  };



  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
*/
});









module.exports = contact;
