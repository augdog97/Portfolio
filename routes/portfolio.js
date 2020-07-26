var express = require('express');
var portfolio = express.Router();


portfolio.use(express.static('public'));

/* GET Portfolio Page. */
portfolio.get('/html-files/portfolio.html/', function(req, res, next) {
  if(err) {
      console.log("This didnt work!");
  } else {
    res.sendFile('/Users/AugustShah 1/Documents/Coding-Tools/Projects/portfolio/portfolio/html-files/portfolio.html');
      res.sendStatus(200);
  }
});

module.exports = portfolio;