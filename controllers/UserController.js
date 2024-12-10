const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const userSchema = require('../models/UserSchema');
const bcrypt = require('bcrypt');
const JWT_SECRET = "your_jwt_secret_key";

exports.registerUser = async (req, res) => {
    const { name, email, mobile, pass } = req.body;
    const hashPassword = bcrypt.hashSync(pass, 10);
    const UserEmail = await userSchema.findOne({ email });
    if (UserEmail) {
        return res.status(400).json({ message: "Email already exists" });
    }
    const userData = userSchema({
        name,
        email,
        mobile,
        pass: hashPassword
    });
    try {
        const user = await userData.save();
        const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });
        return res.status(201).json({ message: "User created successfully", token });
    } catch (error) {
        return res.status(500).json({ message: "Error creating user", error });
    }
};

exports.loginUser = async (req, res) => {
    const { email, pass } = req.body;
    const user = await userSchema.findOne({ email });

    if (!user) {
        return res.status(400).json({ message: "Email not available, please register" });
    }
    const isMatch = await bcrypt.compare(pass, user.pass);
    if (!isMatch) {
        return res.status(400).json({ message: "Password not matched" });
    }
    const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });
    // console.log("Login Successful")
    console.log("token : - ",token)
    return res.status(200).json({ message: "Login Successful ", token }); // JWT
};

exports.logoutUser = async (req, res) => {
    return res.status(200).json({ message: "Logout Successful (Discard Token on Client-Side)" });
};
