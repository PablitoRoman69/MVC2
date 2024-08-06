import {Schema, model} from 'mongoose'

export const esquemaaprobados = new Schema({
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
 

export const Modeloaprobados = new model ('Aprobados', esquemaaprobados)