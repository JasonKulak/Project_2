const mongoose = require("./connection")

//SANDWICH SCHEMA

const sandwichSchema = new mongoose.Schema({
    sandwichName: {type: String, required: true},
    available: Boolean,
    price: Number,
    restaurantName: String,
    location: String,
}, {timestamps: true})

//Sandwich model - interface with the database for Sandwiches
const Sandwich = mongoose.model("Sandwich", sandwichSchema)

//Export the Sandwich Model
module.exports = Sandwich