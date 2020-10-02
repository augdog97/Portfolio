var express = require('express');
const success = express.Router();
var path = require('path');
const bodyParser = require('body-parser');

success.use(bodyParser.json() );


success.get('/contact:success',  (req,res,next) => {
  res.render('success');
  })





  module.exports = success;