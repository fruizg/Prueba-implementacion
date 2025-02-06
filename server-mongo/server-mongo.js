const Patient = require( '../models/model.js');

const CreatePatient = async (patient) =>{
    try {
        const newPatient = new Patient(patient);
        return await newPatient.save()
    } catch (error) {
        console.error(error)
    }
};

const DeletePatient = async (id) =>{
    try {
        return Patient.findByIdAndDelete(id)
    } catch (error) {
        console.error(error)
    }
};
const getAll = async () =>{
    try {
        return Patient.find()
    } catch (error) {
        console.error(error)
    }
};
const getById = async (id)=>{
    try {
        return Patient.findById(id)
    } catch (error) {
        console.error(error)
    }



};

module.exports = {
    CreatePatient,
    DeletePatient,
    getAll,
    getById
};