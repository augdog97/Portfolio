const express = require('express');
const contact = express.Router();
const nodemailer = require('nodemailer')

/* GET contact PAGE listing. */
contact.get('/contact.html#0', (req,res) => {
    res.render('contact', {title: 'portfolio'});

})

/*POST 
contact.post('/', function(req, res) {
    var name = req.body["name"];
  var mail = req.body["email"];
  var message = req.body["message"];

  if (!name || !mail) {
    res.send("Error: Email & Subject should not be Blank");
    return false;
  }

var smtpTransport = nodemailer.createTransport("SMTP", {
    host: "smtp.gmail.com", 
    secureConnection: true, 
    port: 465, 
        auth: {
            user: 'augustshah@02pilot.com',
            pass: 'tqomfprhoqautsxg'
        }
});

var mailOptions = {
    from: "Node Emailer - <email@gmail.com>",
    to: req.body.email, 
    name: req.body.name + " -",
    html: "<b>"+req.body.message+"<b>"
}
smtpTransport.sendMail(mailOptions, function(error, response) {
    if (error) {
        res.send("Email could not be sent due to error:" +error);
    }else {
        res.send("Email has been sent successfully");
    }
});
});*/

module.exports = contact;
