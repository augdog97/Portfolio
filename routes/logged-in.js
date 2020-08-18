var express = require('express');
var loggedin = express.Router();
var path = require('path');

loggedin.use(express.static(__dirname + 'portfolio'));

/* GET Portfolio Page. */
loggedin.get('/user:id', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../html-files/user-accounts', 'user-account.html'));
});

module.exports = loggedin;