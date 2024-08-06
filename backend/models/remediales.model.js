import {Schema, model} from 'mongoose'

export const esquemaremediales = new Schema({
    Alumno:{
        type: String
    },
    Estatus:{
        type: String
    }
 })
 

export const Modeloremediales = new model ('Remediales', esquemaremediales)