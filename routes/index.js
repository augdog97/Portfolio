var express = require('express');
var router = express.Router();
var path = require('path');

router.use(express.static('public'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../html-files', 'index.html'));
  
});

module.exports = router;
