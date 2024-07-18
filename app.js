const express = require("express")
const app = express()
const cors = require("cors")
const productsController = require("./controllers/productsController")
const usersController = require("./controllers/usersController")

app.use(cors())
app.use(express.json())
app.use("/products", productsController)
app.use("/users", usersController)

app.get("/" ,(req, res) => {
    res.send("Welcome to foody!")
})

app.get("*", (req, res) => {
    res.send("Invalid URL")
})

module.exports = app;