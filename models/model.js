const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,

});

const Patient = mongoose.model('Patient', PatientSchema);

module.exports = { Patient };