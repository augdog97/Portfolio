

var express = require('express');
const contact = express.Router();
var path = require('path');


contact.use(express.static('public'));

contact.get('/contact.html/',  (req,res,next) => {
    res.sendFile(path.resolve(__dirname, 'contact.html'));
    console.log('this works');
});

contact.post('/contact.html/', (req,res,next) => {
    console.log(req.body.data);
})




/*contact.post('/contact.html#contact', (req, res) => {
    const { name, email, message } = req.body;
    log('Data: ', req.body);

    sendMail(name, email, message, function(err, data) {
        if (err) {
            log('ERROR: ', err);
            return res.status(500).json({ message: err.message || 'Internal Error' });
        }
        log('Email sent!!!');
        return res.json({ message: 'Email sent!!!!!' });
    });
});
   

const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '8caaa273a49095af3afcc63af5777b8d-ffefc4e4-d83dea73',
        domain: 'sandbox53e2a76bde1344a7a9cbb1fd5e6c2994.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email, 
        to: 'augustshah@02pilot.com', 
        name,
        message
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}


POST 
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
