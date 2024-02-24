

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    experience:{
        type: String,
        default: null ,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
    },
    sexe: {
        type: String,
        enum: ['male', 'female'],
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    telephone: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'User' 
    }
}, { timestamps: true });

const adminSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    role: {
        type: String,
        default: 'Admin'
    }
});

const doctorSchema = new Schema({
    
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
    },
    sexe: {
        type: String,
        enum: ['male', 'female'],
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    telephone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    ccp: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'Doctor'
    },
   
    lien_doc:{
        type:String,
       required:true,
    },
    validated: {
        type:Boolean,
        default:false,
    },
    liste_rendezvous: {
        type: [String]
    },
    rate:{
        
        enum: [1,1.5, 2,2.5,3,3.5,4,4.5,5],
        type:  Number,
        default:null
    },
    comment: {
        type: [String]
    },
});


const rendezvousSchema = new Schema({
    heureDebut: {
        type: String,
        required: true
    },
    heureFin: {
        type: String,
        required: true
    },
    doctorName: {
        type: String,
        required: true
    },
    patientName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});


const creneaulibreSchema = new Schema({
    heureDebut: {
        type: String,
        required: true
    },
    heureFin: {
        type: String,
        required: true
    },
    doctorName: {
        type: String,
        required: true
    },
    
    date: {
        type: Date,
        required: true
    }
});

module.exports = {
    User: mongoose.model("User", userSchema),
    Admin: mongoose.model("Admin", adminSchema),
    Doctor: mongoose.model("Doctor", doctorSchema),
    Rendezvous:mongoose.model("Rendezvous", rendezvousSchema),
    Creneaulibre:mongoose.model("Creneaulibre", creneaulibreSchema),
};
