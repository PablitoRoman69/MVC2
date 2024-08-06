import mongoose from 'mongoose'; 
import express from 'express'; 
import cors from 'cors';
import dotenv from 'dotenv';
import { testAprobados } from '../backend/controllers/aprobados.controler.js';
import { testReMediales } from '../backend/controllers/remediales.controler.js';
import { testReprobados } from '../backend/controllers/reprobados..controler.js';

dotenv.config();
mongoose.connect(process.env.pablin)
.then (()=> {
    console.log("Si funciona la base")
})
.catch((error)=>{
    console.log ("No funciona la base")
})

//servidor
const app =express(); 
app.use (cors());

app.listen(4005,()=>{ 
    console.log ('Funciona el servidor')
})

testAprobados()
testReMediales()
testReprobados()

