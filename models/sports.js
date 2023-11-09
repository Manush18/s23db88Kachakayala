const mongoose = require("mongoose")
const sportsSchema = mongoose.Schema({
    // sports_name: String,
    // sports_hours: String,
    // sports_players: Number
    name: {
        type: String,
        required: true
    },
    hours: {
        type: String,
        required: true
    },
    players: {
        type: Number,
        required: true,
        min: 0,
        max: 50000
    }
});
module.exports = mongoose.model("sports", 
sportsSchema)