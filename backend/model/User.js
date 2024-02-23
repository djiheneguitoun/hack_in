

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
        enum: ['male', 'female', 'other'],
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
        default: 'User' // Default role is 'User'
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
    //lien doc
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
        enum: ['male', 'female', 'other'],
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
    }
});

module.exports = {
    User: mongoose.model("User", userSchema),
    Admin: mongoose.model("Admin", adminSchema),
    Doctor: mongoose.model("Doctor", doctorSchema)
};
