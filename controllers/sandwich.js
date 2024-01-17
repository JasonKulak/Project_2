const express = require("express")
const Sandwich = require("../models/sandwich")


const router = express.Router()

//ERROR HANDLER
function errorHandler(error, res){
    res.json(error)
}

//ROUTES

//SEED ROUTE
router.get("/seed", async (req, res) => {
    await Sandwich.deleteMany({}).catch((error) => errorHandler(error, res))
    const sandwiches = await Sandwich.create([
        {img: "https://i.imgur.com/b2R322X.jpg", sandwichName: "Grilled Cheese", description: "", available: true, price: 18, restaurantsandwichName: "Milktooth", location: "Indianapolis, Indiana"},
        {sandwichName: "The Hangover Sandwich", description: "", available: true, price: 15, restaurantsandwichName: "Harvest Room", location: "Munster, Indiana"},
        {sandwichName: "Breakfast Quesadilla", description: "", available: true, price: 8.95, restaurantsandwichName: "Morning Star Cafe", location: "Grand Heaven, Michigan"},
        {sandwichName: "Huevos Rancheros Burrito", description: "", available: true, price: 14.95, restaurantsandwichName: "Urth Caffe", location: "Santa Monica, California"},
        {sandwichName: "Munchies Burrito", description: "", available: true, price: 12.50, restaurantsandwichName: "Dogtown Coffee", location: "Santa Monica, California"},
        {sandwichName: "Planet Claire", description: "", available: true, price: 8, restaurantsandwichName: "Grindhouse Cafe", location: "Griffith, Indiana"},
        {sandwichName: "Breakfast Sandwich", description: "", available: true, price: 0, restaurantsandwichName: "Macys", location: "Flagstaff, Arizona"},
        {sandwichName: "Dirty Breakfast", description: "", available: true, price: 10, restaurantsandwichName: "Pub Love", location: "London, England, Battersea"}
    ]).catch((error) => errorHandler(error, res))
    res.json(sandwiches)
})

//INDUCES
//INDEX Route - GET
router.get("/", async (req, res) => {
    const sandwiches = await Sandwich.find({}).catch((error) => errorHandler(error, res))
    res.render("sandwich/index.ejs", {sandwiches})
})

//NEW Route - GET
router.get("/new", (req, res) => {
    res.render("sandwich/new.ejs")
})

//DESTROY Route - DELETE
router.delete("/:id", async (req, res) => {
    await Sandwich.findByIdAndDelete(req.params.id).catch((error) => errorHandler(error, res))
    res.redirect("/sandwich")
})

//UPDATE Route - PUT
router.put("/:id", async (req, res) => {
    req.body.available = Boolean(req.body.available)

    await Sandwich.findByIdAndUpdate(req.params.id, req.body)
    console.log(req.body)
    res.redirect("/sandwich")
   
})

//CREATE Route - POST
router.post("/", async (req, res) => {

    req.body.available = Boolean(req.body.available)

    await Sandwich.create(req.body).catch((error) => errorHandler(error, res))

    res.redirect("/sandwich")
})

//EDIT Route - GET
router.get("/:id/edit", async (req, res) => {
    const sandwich = await Sandwich.findById(req.params.id).catch((error) => errorHandler(error, res))
    res.render("sandwich/edit.ejs", {sandwich})
})

//SHOW Route - GET
router.get("/:id", async (req, res) => {
    const sandwich = await Sandwich.findById(req.params.id)
    console.log(sandwich)
    res.render("sandwich/show.ejs", {sandwich})
})



//EXPORT THE ROUTES
module.exports = router