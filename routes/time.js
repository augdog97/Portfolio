var express = require('express');;
var time = express.Router()

time.use(express.static('public'));

time.get('/html-files/time.html/', (req,res) => {
    res.sendFile('/Users/AugustShah 1/Documents/Coding-Tools/Projects/portfolio/portfolio/html-files/time.html');
});

module.exports = time;