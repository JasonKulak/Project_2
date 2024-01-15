// Dependencies
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const SandwichRouter = require("./controllers/sandwich")




// create app object
const app = express()

//register my middleware
app.use(morgan("dev"))
app.use("/static", express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))

// routes
app.get("/", (req, res) => {
    res.send("It's Working, Dude!")
})

app.use("/sandwich", SandwichRouter)










// turn on the server (the listener)
const PORT = process.env.PORT || 4040
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
