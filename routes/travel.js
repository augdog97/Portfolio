var express = require('express');
var travel = express.Router();
var path = require('path');



/* GET Portfolio Page. */
travel.get('/travel', function(req, res, next) {
    res.render('travels');
})

module.exports = travel;