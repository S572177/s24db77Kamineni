const mongoose = require("mongoose")
const gamesSchema = mongoose.Schema({
games: String,
equipment: String,
no_of_players: Number
})
module.exports = mongoose.model("games",gamesSchema)