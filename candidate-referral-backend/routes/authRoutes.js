const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/User");


const userRouter = express.Router();

userRouter.post("/", async (req,res)=>{
    const { pass, email} = req.body
    try {
        bcrypt.hash(pass, 8, async (err, hash) => {
            if(err) {
                res.status(400).json({err})
            } else {
                const newUser = new UserModel({ email, pass:hash})
                await newUser.save()
                res.status(200).json({msg:"You have been successfully regitered!"})
            }
        }); 
    }catch(error){
        res.status(500).json({error})
    }
})

userRouter.post("/login", async(req,res)=>{
    const {email, pass} = req.body
    try {
        const matchingUser = await UserModel.findOne({email})
        if(matchingUser){
            const isPasswordMatching = await bcrypt.compare(pass, matchingUser.pass)
            if(isPasswordMatching){
                const token = jwt.sign({userId: matchingUser._id }, "Masai")
                res.status(200).json({msg:"Login Successfull!", token})
            } else {
                res.status(400).json({msg:"Invalid Password"})
            }
        } else {
            res.status(404).json({msg:"User not found"})
        }
    }catch(error){
        res.status(500).json({error})
    }
})



module.exports = {userRouter}