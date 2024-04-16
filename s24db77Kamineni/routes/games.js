var express = require('express');
const games_controlers= require('../controllers/games');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
//or;
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
      return next();
    }
    res.redirect("/login");
  };
  
/* GET games */
router.get('/', games_controlers.games_view_all_Page );
router.get('/games/:id', games_controlers.games_detail);
/* GET detail games page */
router.get('/detail', games_controlers.games_view_one_Page);
/* GET create games page */
router.get('/create',secured, games_controlers.games_create_Page);
/* GET create update page */
router.get('/update',secured, games_controlers.games_update_Page);
/* GET delete games page */
router.get('/delete',secured, games_controlers.games_delete_Page);

module.exports = router;
