const Router = require('express');
const { 
    Create,
    Delete,
    GetInfo,
    GetOneInfo} = require('../server-controller/server-controller.js');

const PatientRouter = Router()

PatientRouter.get('/',GetInfo);
PatientRouter.get('/:id',GetOneInfo);
PatientRouter.post('/',Create);
PatientRouter.delete('/:id',Delete);

module.exports = PatientRouter;