var express = require('express');
var router = express.Router();


router.use(express.static('public'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('/Users/AugustShah 1/Documents/Coding-Tools/Projects/portfolio/portfolio/html-files/index.html');
  
});

module.exports = router;
