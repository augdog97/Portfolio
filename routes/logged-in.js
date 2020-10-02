var express = require('express');
var loggedin = express.Router();
var path = require('path');



/* GET Portfolio Page. */
loggedin.get('/user:id', function (req, res, next) {
    res.render('loggedin');
})

module.exports = loggedin;