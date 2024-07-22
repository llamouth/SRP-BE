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
    const {user_name, user_address, user_password} = user
    try {
        const newUser = db.one("INSERT INTO users (user_full_name, user_name, user_address, user_password) VALUES ($1, $2, $3, $4) RETURNING *", [user_name, user_address, user_password])
        return newUser
    } catch (error) {
        return error
    }
}

const updateUser = async (id, user) => {
    const { user_name, user_address, user_password } = user
    try {
        const updatedUser = await db.one("UPDATE users SET user_name=$1, user_address=$2, user_password=$3 WHERE user_id=$4 RETURNING *", [user_name, user_address, user_password, id])
        return updatedUser
    } catch (error) {
        return error
    }
}

const deleteUser = async (id) => {
    try {
        const deletedUser = await db.one("DELETE FROM users WHERE user_id=$1 RETURNING *", id)
        return deletedUser
    } catch (error) {
        return error
    }
}

module.exports = { getAllUsers, getOneUser, createUser, updateUser, deleteUser }