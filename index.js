const express = require("express");
const cors = require("cors");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session)
const usersRouter = require("./users/users-routers");
const db = require("./data/dbConfig")

const server = express()
const port = process.env.PORT || 7000

server.use(cors())
server.use(express.json());
server.use(logger);
server.use(session({
    resave: false, //avoid recreating sessions that have not changed
    saveUninitialized: false, //to comply with GDPR laws
    secret: "keep it secret, keep it safe", // cryptographically sign the cookie
    store: new KnexSessionStore({
        knex: db, // configured instance of knex
        createtable: true, // if the sessions table doesn't exist create it automatically
    })
}));

server.use(usersRouter);


function logger(req,res,next){
    console.log(`${new Date().toISOString()} ${req.ip} ${req.method} ${req.url}`)
    next()
}

server.use((err, req,res,next) => {
    console.log(err)
    res.status(500).json({ message: "You shall not pass!!!!!!"})
})

server.listen(port, () => {
    console.log(`Server listening at ${port} !!!!!!!!!!!`)
});