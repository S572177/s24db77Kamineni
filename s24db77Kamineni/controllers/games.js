var games = require('../models/games');
// List of all.gamess
exports.games_list = function (req, res) {
    res.send('NOT IMPLEMENTED:.games list');
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
exports.games_create_post = async function (req, res) {
    console.log(req.body)
    let document = new games();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"game":"goat", "no_of_players":12, "equipment":"large"}
    document.games = req.body.games;
    document.equipment = req.body.equipment;
    document.no_of_players = req.no_of_players;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific games.
exports.games_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await games.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle games update form on PUT.
exports.games_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await games.findById(req.params.id)
        // Do updates of properties
        if (req.body.games) toUpdate.games = req.body.games;
        if (req.body.no_of_players) toUpdate.no_of_players = req.body.no_of_players;
        if (req.body.equipment) toUpdate.equipment = req.body.equipment;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}failed`);
    }
};

// Handle games delete on DELETE.
exports.games_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await games.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.games_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await games.findById(req.query.id)
        res.render('gamesdetail',
            { title: 'games Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a games.
// No body, no in path parameter, no query.
// Does not need to be async
exports.games_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('gamescreate', { title: 'games Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a games.
// query provides the id
exports.games_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await games.findById(req.query.id)
        res.render('gamesupdate', { title: 'games Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.games_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await games.findById(req.query.id)
        res.render('gamesdelete', {
            title: 'games Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};