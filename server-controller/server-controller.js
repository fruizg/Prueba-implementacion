const e = require('express');
const {
    CreatePatient,
    DeletePatient,
    getAll,
    getById
} = require('../server-mongo/server-mongo.js');

const Create = async (req, res) =>{
    try {
        const { patient } = req.body;
        const response = await CreatePatient(patient);
        return res.json(response)
    } catch (error) {
        console.error(e)
    }
};

const Delete = async (req, res) =>{
    try {
        const { id } = req.params
        const response = await DeletePatient(id)
        return res.json(response)
    } catch (error) {
        console.error(error)
    }
};

const GetInfo =async (req, res)=>{
    try {
        const response = await getAll()
        return res.json(response)
    } catch (error) {
        console.error(error)
    }
};

const GetOneInfo = async (req, res) =>{
    try {
        const { id } = req.params
        const response = await getById(id)
        return res.json(response)
    } catch (error) {
        console.error(error)
        
    }
};

module.exports = {
    Create,
    Delete,
    GetInfo,
    GetOneInfo
};