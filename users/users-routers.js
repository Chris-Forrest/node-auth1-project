const express = require("express");
const bcrypt = require("bcryptjs");
const Users = require("./users-model");
const usersMiddleware = require("./users-middleware");

const router = express.Router()

router.post("/api/register", async (req,res,next) =>{
    try{
        const { username, password } = req.body
        const user = await Users.findBy({ username }).first()

        if(user){
            return res.status(409).json({ message: "Username is already taken"})
        }

        const newUser = await Users.add({ username, password: await bcrypt.hash(password, 12),})
        res.status(201).json(newUser)
    }catch(err){
        next(err)
    }
});

router.post("/api/login", async (req,res,next) =>{
    try{
        const { username, password } = req.body
        const user = await Users.findBy({ username }).first()

        if(!user) {
            return res.status(401).json({ message: "You shall not pass"})
        }

        const passwordValid = await bcrypt.compare(password, user.password)
        if(!password) {
            return res.status(401).json({ message: "You shall not pass"})
        }

        req.session.user = user
        res.json({ message: `Welcome ${user.username} !`})
    }catch(err){
        next(err)
    }
});


module.exports = router