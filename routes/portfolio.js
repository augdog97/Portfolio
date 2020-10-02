var express = require('express');
var portfolio = express.Router();
var path = require('path');



/* GET Portfolio Page. */
portfolio.get('/portfolio', function(req, res, next) {
    res.render('portfolio');
})

module.exports = portfolio;