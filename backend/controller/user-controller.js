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


const signupdoctor = async (req, res, next) => {
    const { username, email, password, age, sexe, telephone, ccp, address, lien_doc } = req.body;

    try {
        // Check if doctor already exists
        const existingDoctor = await Doctor.findOne({ email });
        if (existingDoctor) {
            return res.status(400).json({ message: "Doctor already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newDoctor = new Doctor({
            username,
            email,
            password: hashedPassword,
            age,
            sexe,
            telephone,
            ccp,
            address,
            lien_doc
        });
        await newDoctor.save();
        res.status(201).json({ message: "Doctor created successfully" });
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
};


const liste_doctors= async (req, res) => {
    try {
        const doctors = await Doctor.find(); 
        res.json(doctors); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};



const  getDoctorProfile = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }
        res.json(doctor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const addcreaneau=async (req, res) => {
    try {
        const { heureDebut, heureFin, doctorName, date } = req.body;

        // Create a new creneau libre instance
        const newCreneau = new Creneaulibre({
            heureDebut,
            heureFin,
            doctorName,
            date
        });

        // Save the new creneau libre to the database
        await newCreneau.save();

        res.status(201).json({ message: "Creneau libre created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const validated_doctors= async (req, res) => {
    try {
        const validatedDoctors = await Doctor.find({ validated: true }).sort({ rate: -1 });
        
        res.json(validatedDoctors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
const addrendezvous= async (req, res) => {
    try {
        const { heureDebut, heureFin, doctorName, patientName, date } = req.body;

        // Create a new rendezvous instance
        const newRendezvous = new Rendezvous({
            heureDebut,
            heureFin,
            doctorName,
            patientName,
            date
        });

        // Save the new rendezvous to the database
        await newRendezvous.save();

        res.status(201).json({ message: "Rendezvous created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const search_illness =async (req, res) => {
    try {
        const keyword = req.body; 
        console.log(keyword);
        const regex = new RegExp(keyword, 'i');

        const users = await User.find({ experience: regex });

        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const getexperiences=async (req, res) => {
    try {
        const users = await User.find();

        const experiences = users.map(user => user.experience).filter(Boolean);

        res.json(experiences);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const addcomment=async (req, res) => {
    const { id } = req.params;
    const {comment } = req.body;

    try {
        const doctor = await Doctor.findById(id);

        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }

        doctor.comment.push(comment)

        await doctor.save();

        res.status(200).json({ message: 'Comment added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};




exports.showcreneaulibre=showcreneaulibre;
exports.searchbyadress=searchbyadress;
exports.getAppointmentsForDoctor=getAppointmentsForDoctor;
exports.modifyExperience=modifyExperience; 
exports.validatedoctor=validatedoctor;
exports.deleteDoctor=deleteDoctor;
exports.login=login;
exports.signup=signup;
exports.liste_doctors=liste_doctors;
exports.signupdoctor = signupdoctor;
exports.getDoctorProfile=getDoctorProfile;
exports.addcreaneau=addcreaneau;
exports.validated_doctors=validated_doctors;
exports.addrendezvous=addrendezvous;
exports.search_illness=search_illness;
exports.getexperiences=getexperiences;
exports.addcomment=addcomment;

