var express = require('express');
var davie = express.Router();
var path = require('path');



/* GET Portfolio Page. */
davie.get('/davie', function(req, res, next) {
    res.render('davie');
})

module.exports = davie;