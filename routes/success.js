var express = require('express');
const success = express.Router();
var path = require('path');
const bodyParser = require('body-parser');

success.use(bodyParser.json() );
success.use(express.static(__dirname + 'portfolio'));

success.get('/contact:success',  (req,res,next) => {
    res.sendFile(path.join(__dirname, '../html-files', 'success.html'));

  });





  module.exports = success;