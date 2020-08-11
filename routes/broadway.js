var express = require('express');
var broadway = express.Router();
var path = require('path');

broadway.use(express.static(__dirname + 'portfolio'));

/* GET Portfolio Page. */
broadway.get('/broadway', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../html-files/portfolio-html', 'broadway.html'));
});

module.exports = broadway;