

var express = require('express');
var paymentCanceled = express.Router();
var path = require('path');
var timeout = require('connect-timeout')


/* GET Payment Canceled Page. */
paymentCanceled.get('/Payment:denied',function (req, res, next) {
    res.render('paymentCanceled');
});


module.exports = paymentCanceled;