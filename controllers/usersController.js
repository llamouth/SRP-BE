const express = require("express")
const users = express.Router()
const { getAllUsers, getOneUser, createUser, updateUser, deleteUser } = require("../queries/users")

users.get("/", async (req, res) => {
    const allUsers = await getAllUsers()

    if (allUsers) {
        res.status(200).json(allUsers)
    } else {
        res.status(500).json({ error: "Internal Server Error" })
    }
})

users.get("/:id", async (req, res) => {
    const { id } = req.params
    const oneUser = await getOneUser(id)

    if (oneUser.user_id) {
        res.status(200).json(oneUser)
    } else {
        res.status(500).json({ error: "Internal Server Error" })
    }
})

// Signup Route
users.post("/signup", async (req, res) => {
    const { username, password, address } = req.body;
    const allUsers = await getAllUsers();
    const userExists = allUsers.find(user => user.user_name === username);
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await createUser({ user_name: username, user_password: password, user_address: address });
    if (newUser) {
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } else {
        res.status(500).json({ message: "Internal Server Error" });
    }
});


users.post("/", async (req, res) => {
    const newUser = await createUser(req.body)
    res.status(201).json(newUser)
})

users.put("/:id", async (req, res) => {
    const { id } = req.params
    const updatedUser = await updateUser(id, req.body)

    if (updatedUser.user_id) {
        res.status(200).json(updatedUser)
    } else {
        res.status(500).json({ error: "Internal Server Error" })
    }
})

users.delete("/:id", async (req, res) => {
    const { id } = req.params
    const deletedUser = await deleteUser(id)
    res.status(200).json(deletedUser)
})

module.exports = users