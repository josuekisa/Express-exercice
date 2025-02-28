
const mongoose = require('mongoose');

const modelUser =new  mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }

})

const User = mongoose.model('user',modelUser,'user');

module.exports = User;