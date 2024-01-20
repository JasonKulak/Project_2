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

    // This is what we get when we visit the site
    res.send("It's Working, Dude!")
})

//in order to access the sandwich folder we need to access the views folder which is controlled by the router in the controllers folder. BUT FIRST, we must have "/sandwich" in our URL to access the router for the user to use the router
app.use("/sandwich", SandwichRouter)










// turn on the server (the listener)
const PORT = process.env.PORT || 4040
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
