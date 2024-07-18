const express = require("express")
const usersController = express.Router()
const { getAllUsers, getOneUser, createUser, updateUser, deleteUser } = require("../queries/Users")

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
        res.status(500).json({ error: "Internal Server Error"})
    }
})

usersController.post("/", async (req, res) => {
    const newUser = await createUser(req.body)
    res.status(201).json(newUser)
})

usersController.put("/:id", async (req, res) => {
    const { id } = req.params
    const updatedUser = await updateUser(id, req.body)

    if(updatedUser.user_id){
        res.status(200).json(updatedUser)
    }else {
        res.status(500).json({ error: "Internal Server Error"})
    }
})

usersController.delete("/:id", async (req, res) => {
    const { id } = req.params
    const deletedUser = await deleteUser(id)
    res.status(200).json(deletedUser)
})

module.exports = usersController