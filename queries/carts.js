const db = require("../db/dbConfig")

const getAllCarts = async () => {
    try {
        const allCarts = await db.any("SELECT * FROM cart")
        return allCarts
    } catch (error) {
        return error
    }
}

const getOneCart = async (id) => {
    try {
        const oneCart = await db.one("SELECT * FROM cart WHERE cart_id=$1", id)
        return oneCart
    } catch (error) {
        return error
    }
}

const createCart = async (cart) => {
    const { cart_owner } = cart
    try {
        const createdCart = await db.one("INSERT INTO cart (cart_owner) VALUES ($1) RETURNING *", cart_owner)
        return createdCart
    } catch (error) {
        return error
    }
}

const updateCart = async (id, cart) => {
    const { cart_owner } = cart
    try {
        const updatedCart = await db.one("UPDATE cart SET cart_owner=$1 WHERE cart_id=$2 RETURNING *", [cart_owner, id])
        return updatedCart
    } catch (error) {
        return error
    }
}

const deleteCart = async (id) => {
    try {
        const deletedCart = await db.one("DELETE FROM cart WHERE cart_id=$1 RETURNING *", id)
        return deletedCart
    } catch (error) {
        return error
    }
}

module.exports = { getAllCarts, getOneCart, createCart, updateCart, deleteCart }