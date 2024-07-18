const db = require("../db/dbConfig")

const getAllUsers = async () => {
    try {
        const allUsers = await db.any("SELECT * FROM users")
        return allUsers
    } catch (error) {
        return error
    }
}

const getOneUser = async (id) => {
    try {
        const oneUser = await db.one("SELECT * FROM users WHERE user_id=$1", id)
        return oneUser
    } catch (error) {
        return error
    }
}

const createUser = async (user) => {
    const {user_name, user_address} = user
    try {
        const newUser = db.one("INSERT INTO users (user_name, user_address) VALUES ($1, $2) RETURNING *", [user_name, user_address])
        return newUser
    } catch (error) {
        return error
    }
}

const updateUser = async (id, user) => {
    const { user_name, user_address } = user
    try {
        const updatedUser = await db.one("UPDATE users SET user_name=$1, user_address=$2 WHERE user_id=$3 RETURNING *", [user_name, user_address, id])
        return updatedUser
    } catch (error) {
        return error
    }
}

module.exports = { getAllUsers, getOneUser, createUser, updateUser }