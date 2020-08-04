var express = require('express');
const contact = express.Router();
var path = require('path');
const bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

contact.use(bodyParser.json() );
contact.use(express.static(__dirname + 'portfolio'));

contact.get('/contact',  (req,res,next) => {
  res.sendFile(path.join(__dirname, '../html-files', 'contact.html'));
  console.log('this works');
});



contact.post('/contact', (req,res) => {



  /*const data = req.body.data;
const from = data.email;
const text = data.message;*/

; 

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
  
})







module.exports = contact;
