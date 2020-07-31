var express = require('express');;
var time = express.Router()
var path = require('path');

time.use(express.static(__dirname + 'portfolio'));

time.get('/time', (req,res) => {
    res.sendFile(path.join(__dirname, '../html-files', 'time.html'));
});

module.exports = time;