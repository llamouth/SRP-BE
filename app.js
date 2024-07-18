const express = require("express")
const app = express()
const cors = require("cors")

const productsController = require("./controllers/productsController")
const usersController = require("./controllers/usersController")
const cartsController = require("./controllers/cartsController")
const cartProductsController = require("./controllers/cartProductsController")
const ordersController = require("./controllers/ordersController")

app.use(cors())
app.use(express.json())
app.use("/products", productsController)
app.use("/users", usersController)
app.use("/carts", cartsController)
app.use("/cart_products", cartProductsController)
app.use("/orders", ordersController)

app.get("/" ,(req, res) => {
    res.send("Welcome to foody!")
})

app.get("*", (req, res) => {
    res.send("Invalid URL")
})

module.exports = app;