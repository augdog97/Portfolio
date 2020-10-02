var express = require('express');
var tea = express.Router();
var path = require('path');



/* GET Portfolio Page. */
tea.get('/tea', function(req, res, next) {
    res.render('tea');
})

module.exports = tea;