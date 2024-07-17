const db = require("../db/dbConfig")

const getAllProducts = async () => {
    try {
        const allProducts = await db.any('SELECT * FROM products')
        return allProducts
    } catch (error) {
        return error
    }
}

const getOneProduct = async (id) => {
    try {
        const oneProduct = await db.one('SELECT * FROM products WHERE id=$1', id)
        return oneProduct
    } catch (error) {
        return error
    }
}

module.exports = { getAllProducts, getOneProduct }