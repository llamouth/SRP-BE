const express = require("express")
const app = express()
const cors = require("cors")
const productsController = require("./controllers/productsController")

app.use(cors())
app.use(express.json())
app.use("/products", productsController)

app.get("/" ,(req, res) => {
    res.send("Welcome to foody!")
})

app.get("*", (req, res) => {
    res.send("Invalid URL")
})

module.exports = app;