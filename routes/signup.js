var express = require('express');
var signup = express.Router();
var path = require('path');

signup.use(express.static(__dirname + 'portfolio'));

/* GET Portfolio Page. */
signup.get('/signup', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../html-files/user-accounts', 'signup.html'));
});

module.exports = signup;