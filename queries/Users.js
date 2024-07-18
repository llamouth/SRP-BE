const db = require("../db/dbConfig")

const getAllUsers = async () => {
    try {
        const allUsers = await db.any("SELECT * FROM users")
        return allUsers
    } catch (error) {
        return error
    }
}

module.exports = { getAllUsers }