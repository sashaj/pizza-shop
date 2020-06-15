"use strict";

// ./src/index.js
// importing the dependencies
var express = require("express");

var bodyParser = require("body-parser");

var cors = require("cors");

var helmet = require("helmet");

var morgan = require("morgan");

var serveStatic = require("serve-static");

var path = require("path"); // defining the Express app


var app = express(); // defining an array to work as the database (temporary solution)
// const products = [{ title: "Hello, world (again)!" }];

var products = [{
  image: "arriva.jpeg",
  name: "Arriva",
  price: 12,
  article: "P1",
  available: true,
  category: "small",
  description: "Burger sauce, chicken, ranch sauce, chorizo, bell peppers, red onions, mozzarella, tomatoes, garlic"
}, {
  image: "cheese.jpg",
  name: "Cheese",
  price: 15,
  article: "P2",
  available: true,
  category: "small",
  description: "Large portion of mozzarella, tomato sauce"
}, {
  image: "ham-cheese.jpg",
  name: "Ham and cheese",
  price: 20,
  article: "P3",
  available: false,
  category: "medium",
  description: "Ham, large portion of mozzarella, cream sauce"
}, {
  image: "ham-mushrooms.jpeg",
  name: "Ham and mushrooms",
  price: 18,
  article: "P4",
  available: true,
  category: "medium",
  description: "Ham, champignons, large portion of mozzarella, tomato sauce"
}, {
  image: "hawaii.jpg",
  name: "Hawaii",
  price: 14,
  article: "P5",
  available: false,
  category: "small",
  description: "Chicken, tomato sauce, mozzarella, pineapple"
}, {
  image: "italian.jpg",
  name: "Italian",
  price: 25,
  article: "P6",
  available: true,
  category: "big",
  description: "Italian herbs, spicy pepperoni, tomato sauce, mushrooms, mozzarella, black olives"
}, {
  image: "mexican.jpg",
  name: "Mexican",
  price: 30,
  article: "P7",
  available: true,
  category: "big",
  description: "Chicken, tomato sauce, bell pepper, red onion, mozzarella, spicy jalapenos, tomatoes, salsa sauce"
}, {
  image: "pepperoni.jpeg",
  name: "Pepperoni",
  price: 27,
  article: "P8",
  available: true,
  category: "big",
  description: "Spicy pepperoni, larger portion of mozzarella, tomato sauce"
}, {
  image: "cheese-chicken.jpg",
  name: "Cheese chicken",
  price: 24,
  article: "P9",
  available: true,
  category: "medium",
  description: "Chicken, mozzarella, tomatoes, cheese sauce"
}, {
  image: "four-seasons.jpg",
  name: "Four seasons",
  price: 18,
  article: "P11",
  available: true,
  category: "big",
  description: "Larger portion of mozzarella, ham, pepperoni, feta cheese, tomatoes, champignons, tomato sauce"
}, {
  image: "meat.jpg",
  name: "Meat",
  price: 22,
  article: "P12",
  available: true,
  category: "big",
  description: "Chicken, ham, pepperoni, tomato sauce, spicy chorizo, mozzarella"
}, {
  image: "four-cheeses.jpg",
  name: "Four cheeses",
  price: 13,
  article: "P13",
  available: true,
  category: "small",
  description: "Larger portion of mozzarella, cheddar cheese, parmesan, blue cheese, cream sauce"
}, {
  image: "double-pepperoni.jpg",
  name: "Double pepperoni",
  price: 16,
  article: "P14",
  available: true,
  category: "medium",
  description: "More spicy pepperoni, larger portion of mozzarella, tomato sauce"
}, {
  image: "veggie.jpg",
  name: "Veggie",
  price: 21,
  article: "P15",
  available: false,
  category: "medium",
  description: "Tomatoes, feta cheese, champignons, bell peppers, red onions, mozzarella, black olives, tomato sauce"
}, {
  image: "margherita.jpg",
  name: "Margherita",
  price: 11,
  article: "P16",
  available: true,
  category: "big",
  description: "Larger portion of mozzarella, tomatoes, tomato sauce"
}, {
  image: "crazy-pepperoni.jpg",
  name: "Crazy pepperoni",
  price: 19,
  article: "P17",
  available: true,
  category: "small",
  description: "Chicken, spicy pepperoni, tomato sauce, mozzarella, sweet and sour sauce"
}, {
  image: "chicken-barbecue.jpg",
  name: "Chicken barbecue",
  price: 25,
  article: "P18",
  available: true,
  category: "medium",
  description: "Chicken, barbecue sauce, tomato sauce, red onion, mozarella, bacon"
}]; // adding Helmet to enhance your API's security

app.use(helmet());
app.use(serveStatic(path.join(__dirname, "dist"))); // using bodyParser to parse JSON bodies into JS objects

app.use(bodyParser.json()); // enabling CORS for all requests

app.use(cors()); // adding morgan to log HTTP requests

app.use(morgan("combined")); // defining an endpoint to return all ads

app.get("/products", function (req, res) {
  res.send(products);
});
app.post("/form", function (req, res) {
  if (req) {
    res.send({
      message: "got form"
    });
  }
}); // starting the server

app.listen(8080, function () {
  console.log("listening on port 8080");
});