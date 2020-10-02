var express = require('express');
var signin = express.Router();
var path = require('path');



/* GET Portfolio Page. */
signin.get('/signin', function (req, res, next) {
    res.render('signin');
})

module.exports = signin;