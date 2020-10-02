var express = require('express');
var signup = express.Router();
var path = require('path');



/* GET Portfolio Page. */
signup.get('/signup', function (req, res, next) {
   res.render('signup');
})

module.exports = signup;