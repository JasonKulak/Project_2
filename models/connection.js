//DEPENDENCIES
require("dotenv").config()
const mongoose = require("mongoose")

//ESTABLISH CONNECTION
// get .env variables
const DATABASE_URL = process.env.DATABASE_URL

// database connection
mongoose.connect(DATABASE_URL);

//Connection Events
mongoose.connection
.on("open", () => console.log("Connected to Mongoose, Dude!"))
.on("close", () => console.log("Disconnected from Mongoose"))
.on("error", (error) => console.log(error))

//export the mongoose object
module.exports = mongoose