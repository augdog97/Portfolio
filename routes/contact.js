var express = require('express');
const contact = express.Router();
var path = require('path');
const bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

/* 1. using the body parser to get JSOn
   2. I am getting the absolute path to the web app portfolio and serving the static files
   */ 
contact.use(bodyParser.json() );
contact.use(express.static(__dirname + 'portfolio'));

/* 
1. Making a GET request and sending the Contact HTMl file
2. using next to run the next set of middleware
*/

contact.get('/contact',  (req,res,next) => {
  res.sendFile(path.join(__dirname, '../html-files', 'contact.html'));

});


/*
1. making a POST request to the contact route.
2. transporter: part of nodemailer to set up sending an email. 
3. Auth: Creds for Gmail 
4. Verifying that the SMTP server is running correctly with Transporter.verify
5. Sending the Email using req.body(parsed json)
6. Error logging 
*/

contact.post('/contact', (req,res,next) => {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'augustshah@02pilot.com',
      pass: 'hgahalzecelxdxis'
    }
  });
 
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
  

});









module.exports = contact;
