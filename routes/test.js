
var express = require('express');
var test = express.Router();
var path = require('path');



/* GET Portfolio Page. */
test.get('/test', function (req, res, next) {
    res.render('test');
})

module.exports = test;