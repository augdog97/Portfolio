var express = require('express');
var davie = express.Router();
var path = require('path');

davie.use(express.static(__dirname + 'portfolio'));

/* GET Portfolio Page. */
davie.get('/davie', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../html-files/portfolio-html', 'davie.html'));
});

module.exports = davie;