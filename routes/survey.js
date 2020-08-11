var express = require('express');
var survey = express.Router();
var path = require('path');

survey.use(express.static(__dirname + 'portfolio'));

/* GET Portfolio Page. */
survey.get('/survey', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../html-files/portfolio-html', 'survey.html'));
});

module.exports = survey;