var games = require('../models/games');
// List of all.games
exports.games_list = function (req, res) {
    res.send('NOT IMPLEMENTED:.games list');
};



// GET request for one games.
router.get('/games/:id', games_controller.games_detail);
// for a specific games.
exports.games_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await games.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};


// for a specific.games.
exports.games_detail = function (req, res) {
    res.send('NOT IMPLEMENTED:.games detail: ' + req.params.id);
};
// Handle.games create on POST.
exports.games_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED:.games create POST');
};
// Handle.games delete from on DELETE.
exports.games_delete = function (req, res) {
    res.send('NOT IMPLEMENTED:.games delete DELETE ' + req.params.id);
};
// Handle.games update form on PUT.
exports.games_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED:.games update PUT' + req.params.id);
};
// List of all games
exports.games_list = async function (req, res) {
    try {
        thegames = await games.find();
        res.send(thegames);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.games_view_all_Page = async function (req, res) {
    try {
        thegames = await games.find();
        res.render('games', { title: 'games Search Results', results: thegames });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle games create on POST.
exports.games_create_post = async function(req, res) {
console.log(req.body)
let document = new games();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"games_type":"goat", "cost":12, "size":"large"}
document.games = req.body.games;
document.equipment = req.body.equipment;
document.no_of_players = req.no_of_players;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};



