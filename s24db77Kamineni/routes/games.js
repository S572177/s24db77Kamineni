var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('games', { title: 'search results for games' });
});

module.exports = router;
