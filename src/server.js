const { exec } = require("child_process")
const express = require ("express")
const server = express ()

server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})




server.listen (3000)