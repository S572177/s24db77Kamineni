var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var games_controller = require('../controllers/games');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// games ROUTES ///
// POST request for creating a games.
router.post('/games', games_controller.games_create_post);
// DELETE request to delete games.
router.delete('/games/:id', games_controller.games_delete);
// PUT request to update games.
router.put('/games/:id', games_controller.games_update_put);
// GET request for one games.
router.get('/games/:id', games_controller.games_detail);
// GET request for list of all games items.
router.get('/games', games_controller.games_list);
module.exports = router;
// API for our resources
// exports.api = function(req, res) {
// res.write('[');
// res.write('{"resource":"games", ');
// res.write(' "verbs":["GET","PUT", "DELETE"] ');
// res.write('}');
// res.write(']')
// res.send();
// };
