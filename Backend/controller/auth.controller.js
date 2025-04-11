import User from "../models/user.js";
import mongoose from "mongoose";

/*
   404 => failed transaction mostly database table error but not sure
   202 => user picked incorrect option
   201 => successful operation

 */

/*
    created basic utility for the working app in the initial phase but model will be changed as we progress
 */

export const signUp = async function (req, res) {
    const session = await mongoose.startSession();
    session.startTransaction();

    try{
        const {email , password} = req.body;
        const user = await User.findOne({email: email , password: password});
        if(user){
            await session.abortTransaction();
            return res.status(202).json({
                       success : false,
                       message : "User already exists"
                   })
        }

        // we are safe to create the user as the user doesn't exist
        await User.create({
            email : email,
            password: password,
        })
        await session.commitTransaction();
        await session.endSession();

        console.log("User successfully logged in");
        return res.status(202).json({
            success : true,
            message : "User successfully created Enjoy!!"
        })
    }
    catch(err){
        await session.abortTransaction();
        await session.endSession();
        res.status(400).send({
            success : false,
            message : err.message,
        })
    }
}

export const signIn = async function(req , res) {
    try{
        const {email , password} = req.body;
        const user = await User.findOne({email : email});
        if(!user){
            return res.status(202).json({
                success : false,
                message : "User doesn't exist choose different option!!"
            })
        }

        if(user.password !== password){
            return res.status(202).send({
                success : false ,
                message : "Passowrd is wrong!!"
            })
        }

        return res.status(202).send({
            success : true,
            message : "User successfully logged in"
        })

    }
    catch(err){
        console.error(err.message);
        res.status(400).send({
            success : false,
            message : err.message,
        })
    }
}

export default {signUp , signIn};
