
var express = require('express');
var paymentSuccess = express.Router();
var path = require('path');



/* GET Payment Success Page. */
paymentSuccess.get('/paymentConfirmed', function (req, res, next) {
    res.render('paymentSuccess');
})

module.exports = paymentSuccess;