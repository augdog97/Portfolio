var express = require('express');;
var time = express.Router()
var path = require('path');



time.get('/time', (req,res) => {
    res.render('time');
})

module.exports = time;