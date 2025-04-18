import User from "../models/user.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import {JWT_KEY} from "../config/env.js";

/*
   404 => failed transaction mostly database table error but not sure
   202 => user picked incorrect option
   201 => successful operation

 */

/*
    created basic utility for the working app in the initial phase but model will be changed as we progress
 */


const maxDays = 3 * 24 * 60 * 1000 ;

const generateToken = async (email , userID) => {
    return await jwt.sign({email, userID}, JWT_KEY, {expiresIn: maxDays});
};

export const signUp = async (req, res) => {
    try{
        const {username , email , password } = req.body;
        if(!username || !email || !password){
            return res.status(400).send({
                "message" : "Username , email and password are required",
            })
        }

        const user = await User.create({username : username, email : email, password: password});
        if(!user){
            return res.status(400).send({
                "message" : "Username or email already exists",
            })
        }

        const token = await generateToken(email , user.id);
        res.cookie("jwt" , token , {
            maxAge: maxDays,
            sameSite: "None",
            secure: true,
        });

        return res.status(201).send({
            user : {
                id: user.id,
                email: user.email,
                profileSetup: user.profileSetup,
            }})

    }catch(err){
        console.log(err);
        return res.status(500).send({
            "message" : "database connection failed",
        })
    }
}

export const login = async (req ,res) => {

}