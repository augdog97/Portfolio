var express = require('express');
var portfolio = express.Router();
var path = require('path');

portfolio.use(express.static(__dirname + 'portfolio'));

/* GET Portfolio Page. */
portfolio.get('/portfolio', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../html-files', 'portfolio.html'));
});

module.exports = portfolio;