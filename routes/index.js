var express = require('express');
var router = express.Router();
var path = require('path');
const cache = require('memory-cache');

let memCache = new cache.Cache();
let cacheMiddleware = (duration) => {
  return (req, res, next) => {
    let key = '__express__' + req.originalUrl || req.url
    let cacheContent = memCache.get(key);
    if (cacheContent) {
      res.send(cacheContent);
      return
    } else {
      res.sendResponse = res.send
      res.send = (body) => {
        memCache.put(key, body, duration * 1000);
        res.sendResponse(body)
      }
      next()
    }
  }
}


/* GET home page. */
router.get('/', cacheMiddleware(60),function(req, res, next) {
  res.render('index')
  /*
  res.render('index-loading-animation', (err,html) => {
    res.write(html + '\n');
    setTimeout(() => {
      res.render('index',   (err,html)=> {
        res.end(html + '\n');
      })
    },5000);
  }); */
})


module.exports = router;
