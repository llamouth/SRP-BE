const express = require("express")
const products = express.Router()
const { getAllProducts, getOneProduct } = require("../queries/products")

products.get("/", async (req, res) => {
    const allProducts = await getAllProducts()
    if(allProducts){
        res.status(200).json(allProducts)
    }else {
        res.status(500).json({ error: "Internal Server" })
    }
})

products.get("/:id", async (req, res) => {
    const { id } = req.params;
    const oneProduct = await getOneProduct(id)
    
    if(oneProduct.id){
        res.status(200).json(oneProduct)
    }else {
        res.status(500).json({ error: "Internal Server" })
    }
})

module.exports = products;