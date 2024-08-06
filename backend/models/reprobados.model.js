import {Schema, model} from 'mongoose'

export const esquemareprobados = new Schema({
    nombre:{
        type: String
    },
    Apepat:{
        type: String
    },
    Apemat:{
        type: String
    },
    promedio:{
        type: Number
    }
 })
 

export const Modeloreprobados = new model ('Reprobados', esquemareprobados)