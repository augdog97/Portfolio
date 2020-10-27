

var express = require('express');
var checkout = express.Router();
var path = require('path');



/* GET checkout Page. */
checkout.get('/checkout', function (req, res, next) {
    res.render('checkout');
})

module.exports = checkout;