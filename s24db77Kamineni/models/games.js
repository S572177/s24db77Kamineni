const mongoose = require("mongoose");
const gamesSchema = mongoose.Schema({
  games: { type: String, minlength: 2 },
  equipment: { type: String, required: true },
  no_of_players: { type: Number, required: true },
});
module.exports = mongoose.model("games", gamesSchema);
