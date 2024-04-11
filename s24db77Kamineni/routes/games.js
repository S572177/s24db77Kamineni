var express = require('express');
const games_controlers= require('../controllers/games');
var router = express.Router();
/* GET games */
router.get('/', games_controlers.games_view_all_Page );
router.get('/games/:id', games_controlers.games_detail);
/* GET detail games page */
router.get('/detail', games_controlers.games_view_one_Page);
/* GET create games page */
router.get('/create', games_controlers.games_create_Page);
/* GET create update page */
router.get('/update', games_controlers.games_update_Page);
/* GET delete games page */
router.get('/delete', games_controlers.games_delete_Page);

module.exports = router;
