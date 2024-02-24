const {User}= require("../model/User");
const {Doctor} = require('../model/User');
const {Rendezvous} = require('../model/User');
const {Creneaulibre} = require('../model/User');
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
            telephone,
          
        });
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        next(error);
    }
};

//------------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------------

//the admin deleletes doctor 
const deleteDoctor = async (req, res, next) => {
    const { doctorId } = req.params; 

    try {
        const doctor = await Doctor.findByIdAndDelete(doctorId);
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }
        res.status(200).send({ message: "Doctor deleted successfully" });
    } catch (error) {
        next(error);
    } 
};

//------------------------------------------------------------------------------------

const validatedoctor = async (req,res,next) => {
    const {doctorId}=req.params;
    try {
        const doctor = await Doctor.findByIdAndUpdate(doctorId, { validated: true },  { new: true });
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }
        res.status(200).send({message:"Doctor validated successfully",doctor});
        
    } catch (error) {
        next(error);
        
    }

}

//------------------------------------------------------------------------------------
const modifyExperience = async (req,res,next) => {
    const {userId}=req.params;
    console.log(userId);
    const {experience}=req.body;
    try {
        const doctor = await User.findByIdAndUpdate(userId, { experience },  { new: true });
        if (!doctor) {
            console.log("user not found");
            return res.status(404).json({ message: "user not found" });
        }
        res.status(200).send({message:"user experience modified successfully",User});
        
    } catch (error) {
        next(error);
        
    }
}
//------------------------------------------------------------------------------------
const getAppointmentsForDoctor = async (req, res, next) => {
    const { doctorName } = req.params;
    try {
        
        const appointments = await Rendezvous.find({ doctorName });
        
        if (appointments.length === 0) {
            return res.status(404).json({ message: "No appointments found for this doctor" });
        }
        
        res.status(200).json(appointments);
    }
    catch (error) {
        next(error);
    }   
}
//------------------------------------------------------------------------------------
const searchbyadress = async (req, res, next) => {
    const { keyword } = req.body; 
    try {
        const regex = new RegExp(keyword, 'i');
        const doctors = await Doctor.find({ address: regex });
        
        if (doctors.length === 0) {
            return res.status(404).json({ message: "No doctors found in this address" });
        }
        
        res.status(200).json(doctors);
    } catch (error) {
        next(error);
    }
};


//------------------------------------------------------------------------------------
const showcreneaulibre=async(req,res,next)=>{
    const {doctorName}=req.params;
    const {date}=req.params;
    try {
        const creneaulibre=await Creneaulibre.find({doctorName,date});
        if(creneaulibre.length===0){
            return res.status(404).json({message:"No creneaulibre found for this doctor"});}
        res.status(200).json(creneaulibre);
    } catch (error) {
        next(error);
    
}
}

exports.showcreneaulibre=showcreneaulibre;
exports.searchbyadress=searchbyadress;
exports.getAppointmentsForDoctor=getAppointmentsForDoctor;
exports.modifyExperience=modifyExperience; 
exports.validatedoctor=validatedoctor;
exports.deleteDoctor=deleteDoctor;
exports.login=login;
exports.signup=signup;

