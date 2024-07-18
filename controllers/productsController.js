const express = require("express")
const products = express.Router()
const { getAllProducts, getOneProduct, createProduct, updateProduct, deleteProduct } = require("../queries/products")
const { checkId, clearWhiteSpace, checkNumber } = require("../validations/productsValidation")

products.get("/", async (req, res) => {
    const allProducts = await getAllProducts()
    if(allProducts){
        res.status(200).json(allProducts)
    }else {
        res.status(500).json({ error: "Internal Server" })
    }
})

products.get("/:id", checkId, async (req, res) => {
    const { id } = req.params;
    const oneProduct = await getOneProduct(id)

    if(oneProduct.product_id){
        res.status(200).json(oneProduct)
    }else {
        res.status(500).json({ error: "Internal Server" })
    }
})

products.post("/", checkNumber, clearWhiteSpace, async (req, res) => {
    const createdProduct = await createProduct(req.body)
    res.status(201).json(createdProduct)
})

products.put("/:id", checkId, checkNumber, clearWhiteSpace, async (req, res) => {
    const { id } = req.params 

    const updatedProduct = await updateProduct(id, req.body)
    if(updatedProduct.product_id){
        res.status(200).json(updatedProduct)
    }else {
        res.status(500).json({ error: "Internal Server Error" })
    }
})

products.delete("/:id", checkId, async (req, res) => {
    const { id } = req.params
    const deletedProduct = await deleteProduct(id)
    res.status(200).json(deletedProduct)
})

module.exports = products;