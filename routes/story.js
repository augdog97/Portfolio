var express = require('express');
var story = express.Router();
var path = require('path');

story.use(express.static(__dirname + 'portfolio'));

/* GET Portfolio Page. */
story.get('/story', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../html-files/portfolio-html', 'form.html'));
});

story.get('/story/form', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../html-files/portfolio-html', 'form-story.html'));
});

story.get('/story/original', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../html-files/portfolio-html', 'form-original.html'));
}); 


module.exports = story;