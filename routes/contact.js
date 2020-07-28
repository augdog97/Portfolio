var express = require('express');
const contact = express.Router();
var path = require('path');

contact.use(express.static(__dirname + 'portfolio'));

contact.get('/contact',  (req,res,next) => {
  res.sendFile(path.join(__dirname, '../html-files', 'contact.html'));
  console.log('this works');
});







module.exports = contact;
