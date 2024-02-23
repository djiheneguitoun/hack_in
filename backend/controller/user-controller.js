const {User}= require("../model/User")
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');














//dupliquer sign up
const signup= async (req, res, next) => {
    const { username, email, password, age, sexe, telephone } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            age,
            sexe,
            telephone
        });
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        next(error);
    }
};

const login=async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Check if user exists+ajouter password
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Create and send JWT token
        const token = jwt.sign({ userId: user._id }, "hello am djihene", { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        next(error);
    }
};

exports.login=login;
exports.signup=signup;

