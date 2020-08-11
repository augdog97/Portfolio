var express = require('express');
var todo = express.Router();
var path = require('path');

todo.use(express.static(__dirname + 'portfolio'));

/* GET Portfolio Page. */
todo.get('/todo', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../html-files/portfolio-html', 'todo.html'));
});

module.exports = todo;