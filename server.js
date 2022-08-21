const express=require('express')
const cors=require('cors')
const mongoose = require('mongoose')
require('dotenv').config();

const app=express()
//midlever
app.use(cors())
//server is sending and receving json
app.use(express.json())

mongoose.connect(process.env.DATABASEE_ACCESS,()=>console.log("database conected"),6000000)
const utrkaRouter=require('./routes/utrka')
const rezultatRouter=require('./routes/rezultat')
app.use('/utrka',utrkaRouter)
app.use('/rezultat',rezultatRouter)

app.listen(5000,()=>console.log("server is running on port 5000"))
module.exports=app