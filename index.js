const express = require("express");
const session = require("express-session");
const KnexSesionStore = require("connect-session-knex")(session)

const server = express()
const port = process.env.PORT || 7000

server.use(express.json())
server.use(logger)


function logger(req,res,next){
    console.log(`${new Date().toISOString()} ${req.ip} ${req.method} ${req.url}`)
    next()
}

server.use((err, req,res,next) => {
    console.log(err)
    res.status(500).json({ message: "Nope try again"})
})

server.listen(port, () => {
    console.log(`Server listening at ${port} !!!!!!!!!!!`)
});