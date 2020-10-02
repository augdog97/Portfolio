var express = require('express');
var broadway = express.Router();
var path = require('path');



/* GET Portfolio Page. */
broadway.get('/broadway', function(req, res, next) {
  res.render('broadway');
})

module.exports = broadway;