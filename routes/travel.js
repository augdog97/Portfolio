var express = require('express');
var travel = express.Router();
var path = require('path');

travel.use(express.static(__dirname + 'portfolio'));

/* GET Portfolio Page. */
travel.get('/travel', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../html-files/portfolio-html', 'travels.html'));
});

module.exports = travel;