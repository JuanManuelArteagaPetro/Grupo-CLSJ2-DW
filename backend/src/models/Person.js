import pkg from 'mongoose';
const { Schema, model } = pkg;

//import {Schema, model} from "mongoose";

const usuarioSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    }, 
    clave: {
        type: Number,
        required: true
    }, 
    Rol: {
        type: String,
        required: true
    }, 
    Estado: {
        type: String,
        required: true
    }, 
    Id: {
        type: Number,
        required: true
    }


});
export default model("Usuarios",usuarioSchema )