var express = require('express');
const games_controlers= require('../controllers/games');
var router = express.Router();
/* GET games */
router.get('/', games_controlers.games_view_all_Page );
router.get('/games/:id', games_controlers.games_detail);
module.exports = router;