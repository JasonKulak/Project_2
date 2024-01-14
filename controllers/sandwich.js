const express = require("express")
const Sandwich = require("../models/sandwich")


const router = express.Router()

//ROUTES

//SEED ROUTE
router.get("/seed", async (req, res) => {
    await Sandwich.deleteMany({})
    const sandwiches = await Sandwich.create([
        {sandwichName: "Grilled Cheese", available: true, price: 18, restaurantName: "Milktooth", location: "Indianapolis, Indiana"},
        {sandwichName: "The Hangover Sandwich", available: true, price: 15, restaurantName: "Harvest Room", location: "Munster, Indiana"},
        {sandwichName: "Breakfast Quesadilla", available: true, price: 8.95, restaurantName: "Morning Star Cafe", location: "Grand Heaven, Michigan"},
        {sandwichName: "Huevos Rancheros Burrito", available: true, price: 14.95, restaurantName: "Urth Caffe", location: "Santa Monica, California"},
        {sandwichName: "Munchies Burrito", available: true, price: 12.50, restaurantName: "Dogtown Coffee", location: "Santa Monica, California"},
        {sandwichName: "Planet Claire", available: true, price: 8, restaurantName: "Grindhouse Cafe", location: "Griffith, Indiana"},
        {sandwichName: "Breakfast Sandwich", available: true, price: 0, restaurantName: "Macys", location: "Flagstaff, Arizona"},
        {sandwichName: "Dirty Breakfast", available: true, price: 10, restaurantName: "Pub Love", location: "London, England, Battersea"}
    ])
    res.json(sandwiches)
})

//EXPORT THE ROUTES
module.exports = router