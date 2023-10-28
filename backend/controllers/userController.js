import user from '../models/userModel.js'
import asyncHandler from "express-async-handler";

export const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const usernameFound = await user.findOne({ "username": username });
    const emailFound = await user.findOne({ "email": email });
    if (usernameFound) {
        res.status(400);
        throw new Error("Change Username");
    }
    else if (emailFound) {
        res.status(400);
        throw new Error("Change Email Id");
    }
    else {
        const data = await user.create({
            username,
            email,
            password
        });
        console.log(data);
        res.status(200).json(data);
    }
});

export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const userFound = await user.findOne({ "email": email, "password": password });
    if (userFound) {
        console.log(userFound);
        res.status(200).json(userFound);
    }
    else {
        res.status(400);
        throw new Error("Please enter correct Username or Password")
    }
});