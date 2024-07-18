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

module.exports = { getAllUsers, getOneUser }