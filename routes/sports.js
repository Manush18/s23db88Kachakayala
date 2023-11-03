var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sports', { title: 'Search Results - sports' });
});

module.exports = router;