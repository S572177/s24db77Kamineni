var express = require('express');
const games_controlers= require('../controllers/games');
var router = express.Router();
/* GET games */
router.get('/', games_controlers.games_view_all_Page );
module.exports = router;