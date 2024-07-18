const express = require("express")
const usersController = express.Router()
const { getAllUsers } = require("../queries/Users")

usersController.get("/", async (req, res) => {
    const allUsers = await getAllUsers()

    if(allUsers) {
        res.status(200).json(allUsers)
    }else {
        res.status(500).json({ error : "Internal Server Error"})
    }
})

module.exports = usersController