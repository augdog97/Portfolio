var express = require('express');
var chore = express.Router();
var path = require('path');

chore.use(express.static(__dirname + 'portfolio'));

/* GET Portfolio Page. */
chore.get('/chore', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../html-files/portfolio-html', 'chore.html'));
});

module.exports = chore;