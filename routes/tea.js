var express = require('express');
var tea = express.Router();
var path = require('path');

tea.use(express.static(__dirname + 'portfolio'));

/* GET Portfolio Page. */
tea.get('/tea', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../html-files/portfolio-html', 'tea.html'));
});

module.exports = tea;