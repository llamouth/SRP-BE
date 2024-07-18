const express = require("express")
const usersController = express.Router()
const { getAllUsers, getOneUser } = require("../queries/Users")

usersController.get("/", async (req, res) => {
    const allUsers = await getAllUsers()

    if(allUsers) {
        res.status(200).json(allUsers)
    }else {
        res.status(500).json({ error : "Internal Server Error"})
    }
})

usersController.get("/:id", async (req, res) => {
    const { id } = req.params
    const oneUser = await getOneUser(id)

    if(oneUser.user_id){
        res.status(200).json(oneUser)
    }else {
        res.status(500).json({ error: "Internal Server"})
    }
})

module.exports = usersController