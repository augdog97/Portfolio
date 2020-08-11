var express = require('express');
var coffee = express.Router();
var path = require('path');

coffee.use(express.static(__dirname + 'portfolio'));

/* GET Portfolio Page. */
coffee.get('/coffee', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../html-files/portfolio-html', 'coffee.html'));
});

module.exports = coffee;