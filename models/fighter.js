


const mongoose = require('mongoose');


    const fighterSchema = new mongoose.Schema({
        nom: String,
        prenom: String,
        age: Number,
        record: String
    });

    const Fighter = mongoose.model('fighter', fighterSchema, 'fighter');

module.exports = Fighter;