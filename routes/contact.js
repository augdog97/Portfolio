

var express = require('express');
const contact = express.Router();
var path = require('path');




contact.use(express.static(__dirname + 'portfolio'));

contact.get('/html-files/contact.html/',  (req,res,next) => {
  res.sendFile('/Users/AugustShah 1/Documents/Coding-Tools/Projects/portfolio/portfolio/html-files/contact.html');
  console.log('this works');
});







module.exports = contact;
