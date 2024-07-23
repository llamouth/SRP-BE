const express = require("express")
const users = express.Router()
const { getAllUsers, getOneUser, createUser, updateUser, deleteUser } = require("../queries/Users")
const { checkId, clearWhiteSpace, checkPasswordLength } = require("../validations/usersValidation")

users.get("/", async (req, res) => {
    const allUsers = await getAllUsers()

    if (allUsers) {
        res.status(200).json(allUsers)
    } else {
        res.status(500).json({ error: "Internal Server Error" })
    }
})

users.get("/:id", checkId, async (req, res) => {
    const { id } = req.params
    const oneUser = await getOneUser(id)

    if (oneUser.user_id) {
        res.status(200).json(oneUser)
    } else {
        res.status(500).json({ error: "Internal Server Error" })
    }
})


users.post("/", async (req, res) => {
    const allUsers = await getAllUsers();
    const userExists = allUsers.find(user => user.user_name === req.body.user_name);
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await createUser(req.body);
    if (newUser) {
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } else {
        res.status(500).json({ message: "Internal Server Error" });
    }
});


users.put("/:id", checkId, clearWhiteSpace, checkPasswordLength, async (req, res) => {
    const { id } = req.params
    const updatedUser = await updateUser(id, req.body)

    if (updatedUser.user_id) {
        res.status(200).json(updatedUser)
    } else {
        res.status(500).json({ error: "Internal Server Error" })
    }
})

users.delete("/:id", checkId, async (req, res) => {
    const { id } = req.params
    const deletedUser = await deleteUser(id)
    res.status(200).json(deletedUser)
})

module.exports = users