var express = require('express');
var signin = express.Router();
var path = require('path');

signin.use(express.static(__dirname + 'portfolio'));

/* GET Portfolio Page. */
signin.get('/signin', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../html-files/user-accounts', 'signin.html'));
});

module.exports = signin;