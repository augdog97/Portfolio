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


JSON.stringify(req.body.data);

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'augustshah@02pilot.com',
      pass: 'hgahalzecelxdxis'
    }
  });
  
  var mailOptions = {
    from: this.email,
    to: 'augustshah@02pilot.com',
    subject: 'Quote',
    text: this.message
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
