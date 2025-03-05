
const { request } = require('express');
const mongoose = require('mongoose');

const modelUser =new  mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String,  unique: true },
    password: { type: String, required: true }

})

const User = mongoose.model('userLogin',modelUser,'userLogin');

module.exports = User;