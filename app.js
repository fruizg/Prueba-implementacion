const express = require('express')
const json = require('express')
const PatientRouter = require ('./routes/route.js')

const app = express()
app.use(json())

const PORT = process.env.PORT ?? 1234

app.listen(PORT,() =>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})

app.use('/patient', PatientRouter)