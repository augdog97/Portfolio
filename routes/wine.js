var express = require('express');
var wine = express.Router();
var path = require('path');

wine.use(express.static(__dirname + 'portfolio'));

/* GET Portfolio Page. */
wine.get('/wine', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../html-files/portfolio-html', 'wine.html'));
});

module.exports = wine;