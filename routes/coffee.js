var express = require('express');
var coffee = express.Router();
var path = require('path');



/* GET Portfolio Page. */
coffee.get('/coffee', function(req, res, next) {
   res.render('coffee');
})

module.exports = coffee;